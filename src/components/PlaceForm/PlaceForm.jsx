/** @jsx jsx */
/* eslint-disable */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { reject, append } from 'ramda';
import axios from 'axios';
import { string, object, boolean, array } from 'yup';
import { useFormik } from 'formik';
import { jsx } from '@emotion/core';

import { Input } from 'components';
import { button } from 'styles';

import styles from './PlaceForm.styles';

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const validationSchema = object().shape({
    slug: string().required(t('errors.is_required')),
  });

  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
  } = useFormik({
    initialValues: {
      slug: '',
    },
    validationSchema,
    validateOnBlur: true,
    onSubmit: data => {
     axios({
        method: 'post',
        url: '/api/new-place',
        data: {
          slug: data.slug,
        }
      })
        .then((response) => {
          // handle success
          console.log(response);
        })
    },
  });

  // return <h1>yo</h1>;
  return (
    <>
      {success && <div>{t('form.success')}</div>}
      {error && <div>{t('form.error')}</div>}

      {!success && (
        <form onSubmit={handleSubmit} css={styles} className="my-3">
          <Input
            type="text"
            slug="slug"
            hasError={errors.slug && touched.slug !== undefined}
            error={errors.slug}
            value={values.slug}
            onChange={handleChange('slug')}
            onBlur={handleBlur('slug')}
          />

          <button type="submit" css={button.primary}>
            {t('send')}
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
