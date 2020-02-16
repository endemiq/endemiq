import { string, object, mixed, array, number } from 'yup';

import i18n from 'locales/i18n.js';

export default object().shape({
  // unique → use map's data [{slug, geolocation}] for validation
  slug: string().required(i18n.t('schemas.required')),

  title: string().required(i18n.t('schemas.required')),
  subtitle: string(),
  cover: string(), // Cloudinary upload before
  description: string(), // Markdown rich editor
  geolocation: object()
    .shape({
      longitude: number().required(i18n.t('schemas.required')),
      latitude: number().required(i18n.t('schemas.required')),
    })
    .required(i18n.t('schemas.required')),
  address: string(), // textarea
  opening: string(), // textarea
  phone: string(), // phone input
  email: string(),
  website: string(),

  // Enum based select, config sync ? +ADD_NEW
  type: mixed()
    .oneOf(['Farm', 'Shop', 'Market'])
    .required(i18n.t('schemas.required')),

  // Enum based checkboxes OR tags ? +ADD_NEW
  label: array().of(mixed().oneOf(['Bio', 'Demeter'])),

  // products: ['Oeufs', 'Poulets fermies', '...'], // Products title
  // or → offers: ['Oeufs frais', 'Lait dès 18h',...]
});
