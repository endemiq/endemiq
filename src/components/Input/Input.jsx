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
  options,
  onChange,
  onBlur,
  required,
  styles: style,
}) => {
  const { t } = useTranslation();
  const isField = type !== 'select' && type !== 'checkbox';
  const isFile = type === 'file';

  return (
    <div css={[styles, style]}>
      <label htmlFor={slug}>
        {t(`form.${slug}`)}
        {required && <sup css={tw('text-xs')}>*</sup>}
      </label>

      {isFile && value.length > 0 && (
        <img
          src={value.replace('/upload/', '/upload/c_fit,w_300,h_300/')}
          alt="Cover"
        />
      )}

      {isField && (
        <input
          className={hasError ? 'error' : '{}'}
          id={slug}
          name={slug}
          type={type}
          placeholder={t(`form.${slug}`)}
          onBlur={onBlur}
          onChange={onChange}
          value={!isFile ? value : ''}
          accept={isFile ? 'image/png, image/jpeg' : ''}
        />
      )}

      {type === 'checkbox' &&
        options.length > 0 &&
        options.map((option, i) => (
          <div key={`checkbox-${slug}-${i}`}>
            <input
              id={`checkbox-${slug}-${i}`}
              name={slug}
              type={type}
              checked={value.includes(option)}
              onChange={e =>
                onChange({ checked: e.target.checked, value: option })
              }
            />
            <label css={tw('inline pl-1')} htmlFor={`checkbox-${slug}-${i}`}>
              {t(`options.${option}`)}
            </label>
          </div>
        ))}

      {type === 'select' && (
        <select
          name={slug}
          id={slug}
          className={hasError ? 'error' : '{}'}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        >
          <option value="">{t('form.choose')}</option>
          {options &&
            options.length > 0 &&
            options.map((option, i) => (
              <option key={`select-${slug}-${i}`} value={option}>
                {t(`options.${option}`)}
              </option>
            ))}
        </select>
      )}

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
  options: PropTypes.array,
  required: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
