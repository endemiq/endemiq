import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const IndexPage = ({ places }) => (
  <ul>
    {places.collection.map(place => (
      <li key={place.id}>{place.title}</li>
    ))}
  </ul>
);

IndexPage.propTypes = {
  places: PropTypes.object.isRequired,
};
IndexPage.defaultProps = {};

const mapState = ({ places }) => ({ places });

export default connect(mapState)(IndexPage);
