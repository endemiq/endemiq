import React from 'react';
// import PropTypes from 'prop-types';

import Logo from 'assets/svg/endemiq-logo.svg';
import { Icon } from 'components';

import styles from './Header.styles';

const Header = () => (
  <>
    <style jsx>{styles}</style>
    <div>
      <Logo />
      <Icon name="heart-plain" />
    </div>
  </>
);

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
