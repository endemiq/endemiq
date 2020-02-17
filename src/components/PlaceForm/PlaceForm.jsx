/** @jsx jsx */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import axios from 'axios';
import { append, reject } from 'ramda';
import slugify from 'slugify';
import { useFormik } from 'formik';
import { jsx } from '@emotion/core';

import { Input, Editor, InputMap } from 'components';
import { button } from 'styles';
import { upload } from 'services/cloudinary';
import { newPlace } from 'services/api';
import placeSchema from 'config/schemas/place';
import types from 'config/types';
import labels from 'config/labels';

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
      slug: 'my-slug',
      title: 'Title',
      subtitle: 'My subtitle',
      cover:
        'https://res.cloudinary.com/endemiq/image/upload/v1581848377/w9aszbv0eafpyqjcdi7x.png',
      description: 'My farm is **amazing**',
      geolocation: {
        longitude: 6.750912348632369,
        latitude: 46.514642163162506,
      },
      address: 'ici',
      opening: 'mtn',
      phone: '123',
      email: 'hello@asdas.com',
      website: 'https://hello.com',
      type: 'Farm',
      label: ['Bio'],
    },
    validationSchema: placeSchema,
    validateOnBlur: true,
    onSubmit: data => {
      setSuccess(true);
      if (data === undefined) setError(true);
      console.log('submit', data);
      newPlace(data).then(res => console.log(res));
    },
  });

  // return <h1>yo</h1>;
  return (
    <>
      {success && <div>{t('form.success')}</div>}
      {error && <div>{t('form.error')}</div>}

      {!success && (
        <form
          onSubmit={handleSubmit}
          css={[styles, tw('md:w-3/4 mx-auto my-6')]}
          className="my-3"
        >
          <div css={tw('row items-baseline')}>
            <Input
              type="text"
              slug="slug"
              hasError={errors.slug && touched.slug !== undefined}
              help={`${t('form.slugHelp')}\n${t(
                'form.for_ex'
              )} http://endemiq.ch/${values.slug || 'sunny-store'}`}
              error={errors.slug}
              value={values.slug}
              onChange={e =>
                setFieldValue(
                  `slug`,
                  slugify(e.target.value, {
                    lower: true,
                    remove: /[*+~.()'"“”?^<>≤≥`–—/\\!;:@[\]{}]/g,
                  })
                )
              }
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
              slug="subtitle"
              hasError={errors.subtitle && touched.subtitle !== undefined}
              error={errors.subtitle}
              value={values.subtitle}
              onChange={handleChange('subtitle')}
              onBlur={handleBlur('subtitle')}
              styles={tw('w-1/2 gutter')}
            />
          </div>

          <Input
            type="file"
            slug="cover"
            hasError={errors.cover && touched.cover !== undefined}
            help={t('form.coverHelp')}
            value={values.cover}
            error={errors.cover}
            onChange={async e => {
              const url = await upload(e.target.files[0]);
              setFieldValue(`cover`, url);
            }}
            onBlur={handleBlur('cover')}
          />

          <Editor
            slug="description"
            onChange={handleChange('description')}
            onBlur={handleBlur('description')}
            value={values.description}
          />

          <InputMap
            slug="geolocation"
            hasError={errors.geolocation && touched.geolocation !== undefined}
            help={t('form.geolocationHelp')}
            value={values.geolocation}
            error={errors.geolocation}
            onChange={val => {
              handleChange('geolocation', val);
              setFieldValue('geolocation', val);
            }}
            onBlur={handleBlur('geolocation')}
          />

          <Editor
            slug="address"
            onChange={handleChange('address')}
            onBlur={handleBlur('address')}
            value={values.address}
          />

          <Editor
            slug="opening"
            onChange={handleChange('opening')}
            onBlur={handleBlur('opening')}
            value={values.opening}
          />

          <div css={tw('row items-baseline')}>
            <Input
              type="text"
              slug="phone"
              hasError={errors.phone && touched.phone !== undefined}
              error={errors.phone}
              value={values.phone}
              onChange={handleChange('phone')}
              onBlur={handleBlur('phone')}
              styles={tw('w-1/2 gutter')}
            />

            <Input
              type="text"
              slug="email"
              hasError={errors.email && touched.email !== undefined}
              error={errors.email}
              value={values.email}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              styles={tw('w-1/2 gutter')}
            />
          </div>

          <Input
            type="text"
            slug="website"
            hasError={errors.website && touched.website !== undefined}
            error={errors.website}
            value={values.website}
            onChange={handleChange('website')}
            onBlur={handleBlur('website')}
          />

          <Input
            type="select"
            slug="type"
            hasError={errors.type && touched.type !== undefined}
            error={errors.type}
            value={values.type}
            onChange={handleChange('type')}
            onBlur={handleBlur('type')}
            options={types}
            required
          />

          <Input
            type="checkbox"
            slug="label"
            hasError={errors.label && touched.label !== undefined}
            error={errors.label}
            value={values.label}
            onChange={({ checked, value }) => {
              const label = checked
                ? append(value, values.label)
                : reject(a => a === value, values.label);
              setFieldValue(`label`, label);
            }}
            options={labels}
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
