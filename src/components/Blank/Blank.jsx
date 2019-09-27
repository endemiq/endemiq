import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Blank.styles';

const Blank = ({ prop }) => {
  const [test, setTest] = useState(true);

  return (
    <>
      <style jsx>{styles}</style>
      <div>
        <h1>Sup {prop}</h1>
      </div>
    </>
  );
};

Blank.propTypes = {
  prop: PropTypes.string,
};
Blank.defaultProps = {};

export default Blank;
