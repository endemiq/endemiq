/* eslint-disable react-hooks/rules-of-hooks */
/** @jsx jsx */
import React, { useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { mergeDeepRight, pipe, forEach } from 'ramda';
import { jsx } from '@emotion/core';

import { IS_CLIENT } from 'config/constants';

import defaultOptions from './config';
import { MapContext } from './MapProvider';

const Map = ({
  options,
  data,
  points,
  clusters,
  popups,
  opened,
  onClick,
  onClickPoint,
}) => {
  if (!IS_CLIENT) return '';

  const { accessToken } = useContext(MapContext);
  const map = useRef(null);
  const mapContainer = useRef();

  // eslint-disable-next-line global-require
  const mapboxgl = require('mapbox-gl');
  mapboxgl.accessToken = accessToken;

  const { general, navigation, layers, images } = mergeDeepRight(
    defaultOptions,
    options
  );

  const handlePoints = () => {
    if (points) {
      const source = map.current.getSource('points');

      // eslint-disable-next-line no-unused-expressions
      source
        ? source.setData(data)
        : map.current.addSource('points', {
            type: 'geojson',
            data,
            cluster: clusters,
            clusterMaxZoom: 14,
            clusterRadius: 50,
          });
    }
  };

  const handleLayers = () => {
    if (points && !map.current.getLayer('points')) {
      map.current.addLayer(layers.points);
    }

    if (clusters && !map.current.getLayer('clusters')) {
      map.current.addLayer(layers.clusters);
    }
  };

  const handleClusters = () => {
    if (clusters) {
      map.current.on('click', 'clusters', e => {
        const features = map.current.queryRenderedFeatures(e.point, {
          layers: ['clusters'],
        });

        const clusterId = features[0].properties.cluster_id;
        map.current
          .getSource('points')
          .getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) return;

            map.current.easeTo({
              center: features[0].geometry.coordinates,
              zoom,
            });
          });
      });
    }
  };

  const getPopupContent = ({ properties }) => `
    <h1>${properties.title}</h1>
  `;

  const handlePopups = () => {
    if (popups) {
      map.current.on('click', 'points', e => {
        const point = e.features[0];

        new mapboxgl.Popup()
          .setLngLat(point.geometry.coordinates.slice())
          .setHTML(getPopupContent(point))
          .addTo(map.current);
      });
    }
  };

  const loadImages = () => {
    forEach(async ({ name, path }) => {
      if (!map.current.hasImage(name)) {
        await map.current.loadImage(path, (err, image) => {
          if (err) throw err;
          map.current.addImage(name, image);
        });
      }
    }, images);
  };

  const updateMap = () =>
    pipe(handlePoints, handleLayers, handleClusters, handlePopups)();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    map.current = new mapboxgl.Map({
      ...general,
      container: mapContainer.current,
    });

    const hovers = [
      ['mouseenter', 'clusters', 'pointer'],
      ['mouseleave', 'clusters', ''],
      ['mouseenter', 'points', 'pointer'],
      ['mouseleave', 'points', 'pointer'],
    ];

    hovers.forEach(([on, item, cursor]) => {
      map.current.on(on, item, () => {
        map.current.getCanvas().style.cursor = cursor;
      });
    });

    if (navigation.enabled) {
      map.current.addControl(
        new mapboxgl.NavigationControl(navigation.options),
        navigation.position
      );
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    map.current.loaded()
      ? handlePoints()
      : map.current.on('load', () => {
          map.current.on('click', e => onClick(e));
          map.current.on('click', 'points', e => onClickPoint(e));
          loadImages();
          updateMap();
        });
  }, [data]);

  useEffect(() => {
    map.current.resize();
  }, [opened]);

  return (
    <div
      ref={mapContainer}
      css={tw('absolute top-0 bottom-0 left-0 right-0')}
    />
  );
};

Map.propTypes = {
  data: PropTypes.object,
  popups: PropTypes.bool,
  points: PropTypes.bool,
  clusters: PropTypes.bool,
  opened: PropTypes.bool,
  options: PropTypes.object,
  onClick: PropTypes.func,
  onClickPoint: PropTypes.func,
};

Map.defaultProps = {
  data: {
    type: 'FeatureCollection',
    features: [],
  },
  popups: false,
  points: false,
  clusters: false,
  opened: true,
  options: {},
  onClick: () => console.log('click on map'),
  onClickPoint: () => console.log('click on marker'),
};

export default Map;
