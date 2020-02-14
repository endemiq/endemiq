/** @jsx jsx */
import React from 'react';
import Head from 'next/head';
import { Global ,jsx } from '@emotion/core'; // eslint-disable-line
import PropTypes from 'prop-types';

import { Header } from 'components';
import Icons from 'components/Icon/Icons';
import { typography } from 'styles';

const Layout = ({ children }) => (
  <div>
    <Global styles={typography} />
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="manifest" href="/static/manifest.json" />
      {/* Import CSS for nprogress */}
      <link rel="stylesheet" href="//rsms.me/inter/inter.css" />
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    </Head>
    <Icons />
    <Header />
    <main>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
Layout.defaultProps = {};

export default Layout;
