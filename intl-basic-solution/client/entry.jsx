import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import App from './App';

import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import it from 'react-intl/locale-data/it';

import translationsDe from '../translations/de.json';
import translationsEn from '../translations/en.json';
import translationsEs from '../translations/es.json';
import translationsfr from '../translations/fr.json';
import translationsIt from '../translations/it.json';

addLocaleData([
  ...de,
  ...en,
  ...es,
  ...fr,
  ...it
]);

const translations = {
  de: translationsDe,
  en: translationsEn,
  es: translationsEs,
  fr: translationsfr,
  it: translationsIt
};

const renderApp = () => {
  const locale = document.documentElement.lang;
  ReactDOM.render(
    <IntlProvider locale={locale} key={locale} messages={translations[locale]}>
      <App />
    </IntlProvider>
  , document.getElementById('app'));
};

if (!window.Intl) {
  require.ensure([
      'intl',
      'intl/locale-data/jsonp/de.js',
      'intl/locale-data/jsonp/en.js',
      'intl/locale-data/jsonp/es.js',
      'intl/locale-data/jsonp/fr.js',
      'intl/locale-data/jsonp/it.js'
  ], (require) => {
      require('intl');
      require('intl/locale-data/jsonp/de.js');
      require('intl/locale-data/jsonp/en.js');
      require('intl/locale-data/jsonp/es.js');
      require('intl/locale-data/jsonp/fr.js');
      require('intl/locale-data/jsonp/it.js');
      renderApp();
  }, 'intl');
} else {
  renderApp();
}
