import { string, object, mixed, array, number } from 'yup';

import types from 'config/types';
import labels from 'config/labels';
import i18n from 'locales/i18n.js';

export default object().shape({
  // unique → use map's data [{slug, geolocation}] for validation
  slug: string().required(i18n.t('schemas.required')),

  title: string().required(i18n.t('schemas.required')),
  subtitle: string().nullable(),
  cover: string().nullable(), // Cloudinary upload before
  description: string().nullable(), // Markdown rich editor
  geolocation: object()
    .shape({
      longitude: number().required(i18n.t('schemas.required')),
      latitude: number().required(i18n.t('schemas.required')),
    })
    .required(i18n.t('schemas.required')),
  address: string().nullable(), // textarea
  opening: string().nullable(), // textarea
  phone: string().nullable(), // phone input
  email: string().nullable(),
  website: string().nullable(),

  // Enum based select, config sync ? +ADD_NEW
  type: mixed()
    .oneOf(types)
    .required(i18n.t('schemas.required')),

  // Enum based checkboxes OR tags ? +ADD_NEW
  labels: array()
    .of(mixed().oneOf(labels))
    .nullable(),

  // products: ['Oeufs', 'Poulets fermies', '...'], // Products title
  // or → offers: ['Oeufs frais', 'Lait dès 18h',...]
});
