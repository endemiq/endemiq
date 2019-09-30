/** eslint-disable-next-line @jsx jsx */
import React from 'react';
import Head from 'next/head';
import { Global ,jsx } from '@emotion/core'; // eslint-disable-line
import PropTypes from 'prop-types';

import { Header } from 'components';
import Icons from 'components/Icon/Icons';
import { layouts, spacing, typography } from 'styles';

const Layout = ({ children }) => (
  <div css={[layouts, spacing]}>
    <Global styles={typography} />
    <Head>
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
