import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from 'locales/messages.fr.js';

const fallbackLng = 'fr';

i18next.use(initReactI18next).init(
  {
    lng: 'fr',
    fallbackLng,
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react
      format: (value, format) => {
        if (format === 'uppercase') return value.toUpperCase();
        if (format === 'lowercase') return value.toLowerCase();
        return value;
      },
    },
    resources: {
      fr: { translation: fr },
    },
  },
  err => {
    if (err) console.log('I18Next error :', err);
  }
);

export default i18next;
