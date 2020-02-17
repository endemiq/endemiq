/** @jsx jsx */
import React from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import { Map } from 'components';

import styles from './MapContainer.styles';

const MapContainer = ({ places }) => {
  const router = useRouter();
  const opened = router.pathname === '/';

  return (
    <div css={[styles, { bottom: opened ? 0 : '100%' }]}>
      <Map
        data={places.geojson}
        clusters
        points
        opened={router.pathname === '/'}
        onClickPoint={e =>
          router.push(
            `/place/[slug]`,
            `/place/${e.features[0].properties.slug}`
          )
        }
      />
    </div>
  );
};

MapContainer.propTypes = {
  places: PropTypes.object.isRequired,
};

MapContainer.defaultProps = {};

const mapState = ({ places }) => ({ places });

export default connect(mapState)(MapContainer);
