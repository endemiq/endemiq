/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import styles from './Icon.styles';

const Icon = ({ name }) => (
  <span css={styles} className={`icon icon-${name}`} aria-hidden="true">
    <svg>
      <use xlinkHref={`#${name}`} />
    </svg>
  </span>
);

Icon.propTypes = { name: PropTypes.string };
Icon.defaultProps = { name: 'heart' };
export default Icon;
