/** @jsx jsx */
/* eslint-disable */
import React from 'react';
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import styles from './Input.styles';

const Input = ({ type, slug, hasError, error, value, onChange, onBlur }) => {
  const { t } = useTranslation();
  return (
    <div css={styles} className="mb-3">
      <label htmlFor={slug}>{t(slug)}*</label>
      <input
        className={hasError ? 'error' : '{}'}
        id={slug}
        name={slug}
        type={type}
        placeholder={t(slug)}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      {hasError && <span>{error}</span>}
    </div>
  );
};
Input.propTypes = {
  type: PropTypes.string,
};
Input.defaultProps = {
  type: 'text',
};

export default Input;
