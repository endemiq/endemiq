/** @jsx jsx */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

import { Layout, ListControl, ListItem } from 'components';

const PlacesPage = ({ places }) => (
  <Layout>
    <div css={tw('container')}>
      <div css={tw('row my-4')}>
        {places.geojson &&
          places.geojson.features.map(place => (
            <ListItem key={place.properties.slug} item={place} />
          ))}
      </div>
    </div>
    <ListControl />
  </Layout>
);

PlacesPage.propTypes = {
  places: PropTypes.object.isRequired,
};
PlacesPage.defaultProps = {};

const mapState = ({ places }) => ({ places });

export default connect(mapState)(PlacesPage);
