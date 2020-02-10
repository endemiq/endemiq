/** @jsx jsx */
/* eslint-disable */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { reject, append } from 'ramda';
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
    firstname: string().required(t('errors.is_required')),
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
      firstname: '',
    },
    validationSchema,
    validateOnBlur: true,
    onSubmit: data => {
      console.log(data);
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
            slug="firstname"
            hasError={errors.firstname && touched.firstname !== undefined}
            error={errors.firstname}
            value={values.firstname}
            onChange={handleChange('firstname')}
            onBlur={handleBlur('firstname')}
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
