import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Layout, ListControl, ListItem } from 'components';

const IndexPage = ({ places }) => (
  <Layout>
    <div className="container">
      <div className="row d-flex wrap my-4">
        {places.geojson.features.map(place => (
          <ListItem key={place.properties.slug} item={place} />
        ))}
      </div>
    </div>
    <ListControl />
  </Layout>
);

IndexPage.propTypes = {
  places: PropTypes.object.isRequired,
};
IndexPage.defaultProps = {};

const mapState = ({ places }) => ({ places });

export default connect(mapState)(IndexPage);
