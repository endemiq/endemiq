/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import styles from './Input.styles';

const Input = ({
  type,
  slug,
  hasError,
  error,
  help,
  value,
  onChange,
  onBlur,
  required,
  styles: style,
}) => {
  const { t } = useTranslation();
  return (
    <div css={[styles, style]} className="mb-3">
      <label htmlFor={slug}>
        {t(`form.${slug}`)}
        {required && <sup css={tw('text-xs')}>*</sup>}
      </label>
      <input
        className={hasError ? 'error' : '{}'}
        id={slug}
        name={slug}
        type={type}
        placeholder={t(`form.${slug}`)}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      {hasError && <span>{error}</span>}
      {!hasError && help && <span>{help}</span>}
    </div>
  );
};

Input.propTypes = {
  error: PropTypes.string,
  help: PropTypes.string,
  hasError: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  slug: PropTypes.string,
  styles: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.any,
  required: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
