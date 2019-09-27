import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Map from 'components/Map';

const IndexPage = ({ places }) => (
  <>
    {/* <ul>
      {places.geojson.features.map(place => (
        <li key={place.properties.id}>{place.properties.title}</li>
      ))}
    </ul> */}
    <Map places={places} />
  </>
);

IndexPage.propTypes = {
  places: PropTypes.object.isRequired,
};
IndexPage.defaultProps = {};

const mapState = ({ places }) => ({ places });

export default connect(mapState)(IndexPage);
