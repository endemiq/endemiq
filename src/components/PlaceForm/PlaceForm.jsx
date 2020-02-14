/** @jsx jsx */
/* eslint-disable */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { reject, append } from 'ramda';
import axios from 'axios';
import slugify from 'slugify';
import { string, object, boolean, array } from 'yup';
import { useFormik } from 'formik';
import { jsx } from '@emotion/core';

import { Input } from 'components';
import { button } from 'styles';
import { upload } from 'services/cloudinary';
import placeSchema from 'config/schemas/place';

import styles from './PlaceForm.styles';

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      slug: 'asda',
      title: 'asd',
      subTitle: '',
      cover: '',
      description: ''
    },
    validationSchema: placeSchema,
    validateOnBlur: true,
    onSubmit: data => {
      console.log('submit', data);
    //  axios({
    //     method: 'post',
    //     url: '/api/new-place',
    //     data: {
    //       slug: data.slug,
    //     }
    //   })
    //     .then((response) => {
    //       // handle success
    //       console.log(response);
    //     })
    },
  });

  // return <h1>yo</h1>;
  return (
    <>
      {success && <div>{t('form.success')}</div>}
      {error && <div>{t('form.error')}</div>}

      {!success && (
        <form onSubmit={handleSubmit} css={[styles, tw('md:w-3/4 mx-auto my-6')]} className="my-3">
          <div css={tw('row items-baseline')}>
            <Input
              type="text"
              slug="slug"
              hasError={errors.slug && touched.slug !== undefined}
              help={`${t('form.slugHelp')}\n${t('form.for_ex')} http://endemiq.ch/${values.slug || 'sunny-store'}`}
              error={errors.slug}
              value={values.slug}
              onChange={e => setFieldValue(`slug`, slugify(e.target.value, {
                lower: true,
                remove: /[*+~.()'"“”?^<>≤≥`–—/\\!;:@\[\]\{\}]/g
              }))}
              onBlur={handleBlur('slug')}
              styles={tw('w-1/2 gutter')}
              required
            />
          </div>

          <div css={tw('row items-baseline')}>
            <Input
              type="text"
              slug="title"
              hasError={errors.title && touched.title !== undefined}
              error={errors.title}
              value={values.title}
              onChange={handleChange('title')}
              onBlur={handleBlur('title')}
              styles={tw('w-1/2 gutter')}
              required
            />

            <Input
              type="text"
              slug="subTitle"
              hasError={errors.subTitle && touched.subTitle !== undefined}
              error={errors.subTitle}
              value={values.subTitle}
              onChange={handleChange('subTitle')}
              onBlur={handleBlur('subTitle')}
              styles={tw('w-1/2 gutter')}
            />
          </div>

          <Input
            type="file"
            slug="cover"
            hasError={errors.cover && touched.cover !== undefined}
            help={t('form.coverHelp')}
            error={errors.cover}
            onChange={async e => {
              const url = await upload(event.target.files[0]);
              setFieldValue(`cover`, url);
            }}
            onBlur={handleBlur('cover')}
          />

          <button type="submit" css={button.primary}>
            {t('form.submit')}
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
