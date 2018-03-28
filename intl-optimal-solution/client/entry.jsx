import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import moment from 'moment';
import App from './App';

const locale = document.documentElement.lang;

const renderApp = (messages) => {
  ReactDOM.render(
    <IntlProvider locale={locale} key={locale} messages={messages}>
      <App />
    </IntlProvider>
  , document.getElementById('app'));
};

const setLocaleData = (localeData, messages, momentLocale = locale) => {
  addLocaleData(localeData);
  moment.locale(momentLocale);
  renderApp(messages);
};

const loadAppData = () => {
  let localeData;
  let messages;

  switch (locale) {
    case 'de':
      require.ensure([
        'moment/locale/de.js',
        'react-intl/locale-data/de.js',
        '../translations/de.json'
      ], (require) => {
        require('moment/locale/de.js');
        localeData = require('react-intl/locale-data/de.js');
        messages = require('../translations/de.json');
        setLocaleData(localeData, messages);
      }, 'app-de');
      break;
    case 'es':
      require.ensure([
        'moment/locale/es.js',
        'react-intl/locale-data/es.js',
        '../translations/es.json'
      ], (require) => {
        require('moment/locale/es.js');
        localeData = require('react-intl/locale-data/es.js');
        messages = require('../translations/es.json');
        setLocaleData(localeData, messages);
      }, 'app-es');
      break;
    case 'fr':
      require.ensure([
        'moment/locale/fr.js',
        'react-intl/locale-data/fr.js',
        '../translations/fr.json'
      ], (require) => {
        require('moment/locale/fr.js');
        localeData = require('react-intl/locale-data/fr.js');
        messages = require('../translations/fr.json');
        setLocaleData(localeData, messages);
      }, 'app-fr');
      break;
    case 'it':
      require.ensure([
        'moment/locale/it.js',
        'react-intl/locale-data/it.js',
        '../translations/it.json'
      ], (require) => {
        require('moment/locale/it.js');
        localeData = require('react-intl/locale-data/it.js');
        messages = require('../translations/it.json');
        setLocaleData(localeData, messages);
      }, 'app-it');
      break;
    default:
      require.ensure([
        'moment/locale/en-gb.js',
        'react-intl/locale-data/en.js',
        '../translations/en.json'
      ], (require) => {
        require('moment/locale/en-gb.js');
        localeData = require('react-intl/locale-data/en.js');
        messages = require('../translations/en.json');
        setLocaleData(localeData, messages, 'en-gb');
      }, 'app-en');
  }
}

const loadIntlData = () => {
  switch (locale) {
    case 'de':
      require.ensure([
        'intl',
        'intl/locale-data/jsonp/de.js'
      ], (require) => {
        require('intl');
        require('intl/locale-data/jsonp/de.js');
        loadAppData();
      }, 'intl-de');
      break;
    case 'es':
      require.ensure([
        'intl',
        'intl/locale-data/jsonp/es.js'
      ], (require) => {
        require('intl');
        require('intl/locale-data/jsonp/es.js');
        loadAppData();
      }, 'intl-es');
      break;
    case 'fr':
      require.ensure([
        'intl',
        'intl/locale-data/jsonp/fr.js'
      ], (require) => {
        require('intl');
        require('intl/locale-data/jsonp/fr.js');
        loadAppData();
      }, 'intl-fr');
      break;
    case 'it':
      require.ensure([
        'intl',
        'intl/locale-data/jsonp/it.js'
      ], (require) => {
        require('intl');
        require('intl/locale-data/jsonp/it.js');
        loadAppData();
      }, 'intl-it');
      break;
    default:
      require.ensure([
        'intl',
        'intl/locale-data/jsonp/en.js'
      ], (require) => {
        require('intl');
        require('intl/locale-data/jsonp/en.js');
        loadAppData();
      }, 'intl-en');
  }
};

if (!window.Intl) {
  loadIntlData();
} else {
  loadAppData();
}
