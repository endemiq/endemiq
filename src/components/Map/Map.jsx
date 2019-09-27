import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import mapConfig from 'config/map.json';
import { IS_CLIENT } from 'config/constants';

import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './Map.styles';

const Map = ({ places }) => {
  if (!IS_CLIENT) return '';

  /* eslint-disable-next-line */
  const map = useRef(null);
  /* eslint-disable-next-line */
  const router = useRouter();
  const mapboxgl = require('mapbox-gl'); // eslint-disable-line
  mapboxgl.accessToken = 'undefined';

  // Initiate Map
  /* eslint-disable-next-line */
  useEffect(() => {
    // Init map instance
    map.current = new mapboxgl.Map({
      container: 'map',
      style: mapConfig.style,
      center: [6.82713, 46.57167],
      zoom: 9,
    });

    // Add native controls
    const nav = new mapboxgl.NavigationControl({ showZoom: false });
    map.current.addControl(nav, 'top-right');
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    // Inject images
    if (!map.current.hasImage('cluster-img')) {
      map.current.loadImage('/static/cluster.png', (err, image) => {
        if (err) throw err;
        map.current.addImage('cluster-img', image);
      });
    }
    if (!map.current.hasImage('marker-img')) {
      map.current.loadImage('/static/marker.png', (err, image) => {
        if (err) throw err;
        map.current.addImage('marker-img', image);
      });
    }

    // Define cluster click event -> zoom
    map.current.on('click', 'clusters', function(e) {
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

    // Define point click event -> open popup
    map.current.on('click', 'unclustered-points', e => {
      const point = e.features[0];
      router.push(`/place/${point.properties.slug}`);
    });

    // Set proper hover cursor
    map.current.on('mouseenter', 'clusters', () => {
      map.current.getCanvas().style.cursor = 'pointer';
    });
    map.current.on('mouseleave', 'clusters', () => {
      map.current.getCanvas().style.cursor = '';
    });
    map.current.on('mouseenter', 'unclustered-points', () => {
      map.current.getCanvas().style.cursor = 'pointer';
    });
    map.current.on('mouseleave', 'unclustered-points', () => {
      map.current.getCanvas().style.cursor = '';
    });

    // map.current.on('load', () => map.current.resize());
  }, []);

  // Update Map layers when places.geojson updates
  /* eslint-disable-next-line */
  useEffect(() => {
    const updateLayers = () => {
      if (map.current.getSource('points') === undefined) {
        map.current.addSource('points', {
          type: 'geojson',
          data: places.geojson,
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50,
        });
      } else {
        map.current.getSource('points').setData(places.geojson);
      }

      if (
        places.geojson.features.length <= 0 &&
        map.current.getLayer('clusters') !== undefined
      ) {
        map.current.removeLayer('unclustered-points');
        map.current.removeLayer('clusters');
      } else if (map.current.getLayer('clusters') === undefined) {
        map.current.addLayer(mapConfig['unclustered-points']);
        map.current.addLayer(mapConfig.clusters);
      }
    };

    if (map.current.loaded()) {
      updateLayers();
    } else {
      map.current.on('load', () => updateLayers());
    }
  }, [places]);

  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <div
        id="map"
        className="map"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />
    </>
  );
};

Map.propTypes = {
  places: PropTypes.object.isRequired,
};
Map.defaultProps = {};

export default Map;
