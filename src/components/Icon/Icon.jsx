import React from 'react';
import PropTypes from 'prop-types';

import styles from './Icon.styles';

const Icon = ({ name }) => (
  <>
    <style jsx>{styles}</style>
    <span className={`icon icon-${name}`} aria-hidden="true">
      <svg>
        <use xlinkHref={`#${name}`} />
      </svg>
    </span>
  </>
);

Icon.propTypes = { name: PropTypes.string };
Icon.defaultProps = { name: 'heart' };
export default Icon;
