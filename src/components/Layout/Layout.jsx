import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { Header } from 'components';
import Icons from 'components/Icon/Icons';

const Layout = ({ children }) => (
  <>
    <Head>
      {/* Import CSS for nprogress */}
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    </Head>
    <Icons />
    <Header />
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
Layout.defaultProps = {};

export default Layout;
