/** @jsx jsx */
import React from 'react';
import Link from 'next/link';
import { jsx } from '@emotion/core';
// import PropTypes from 'prop-types';

import Logo from 'assets/svg/endemiq-logo.svg';

import styles from './Header.styles';

const Header = () => (
  <>
    <header css={styles} className="d-flex align-center justify-center">
      <Link href="/">
        <a className="brand">
          <Logo />
        </a>
      </Link>
    </header>
  </>
);

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
