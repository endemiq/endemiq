import React from 'react';
// import PropTypes from 'prop-types';

import { Layout, ListControl } from 'components';

const IndexPage = () => (
  <Layout hasMap>
    <ListControl isMap />
  </Layout>
);

IndexPage.propTypes = {};
IndexPage.defaultProps = {};

export default IndexPage;
