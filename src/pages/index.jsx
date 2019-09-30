import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Layout, Map } from 'components';

const IndexPage = ({ places }) => (
  <Layout>
    <Map places={places} />
  </Layout>
);

IndexPage.propTypes = {
  places: PropTypes.object.isRequired,
};
IndexPage.defaultProps = {};

const mapState = ({ places }) => ({ places });

export default connect(mapState)(IndexPage);
