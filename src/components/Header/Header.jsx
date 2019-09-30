/** eslint-disable-next-line @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core'; // eslint-disable-line
// import PropTypes from 'prop-types';

import Logo from 'assets/svg/endemiq-logo.svg';

import styles from './Header.styles';

const Header = () => (
  <>
    <header css={styles} className="d-flex align-center justify-center">
      <Logo className="brand" />
    </header>
  </>
);

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
