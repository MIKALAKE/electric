import I18n from 'i18next';

import en from './en';

I18n.init({
  resources: {
    en,
  },
  lng: localStorage.getItem('language'),
});

export default I18n;
