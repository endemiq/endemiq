/** eslint-disable-next-line @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core'; // eslint-disable-line
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
