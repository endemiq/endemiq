/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import styles from './Blank.styles';

const Blank = ({ prop }) => (
  <div css={styles}>
    <h1>Sup {prop}</h1>
  </div>
);

Blank.propTypes = {
  prop: PropTypes.string,
};
Blank.defaultProps = {};

export default Blank;
