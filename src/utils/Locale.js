// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import Cookies from './Cookies';

let currentLocale = 'en-US';

function normalizeLocale(locale) {
  const locales = locale.replace(/_/g, '-').split('-');
  let normalizedLocale = locales[0];
  if (locales.length > 1) {
    normalizedLocale += `-${locales[1].toUpperCase()}`;
  }

  return normalizedLocale;
}

export function setLocale(locale) {
  currentLocale = normalizeLocale(locale);
}

export function getCurrentLocale() {
  try {
    const cookieLanguages = Cookies.get('languages');
    let locale = cookieLanguages ? JSON.parse(cookieLanguages)[0] : undefined;
    if (!locale) {
      locale = window.navigator.languages ? window.navigator.languages[0] :
        (window.navigator.language || window.navigator.userLanguage);
    }

    return normalizeLocale(locale);
  } catch (e) {
    return currentLocale;
  }
}

export function getLocaleData(appMessages = {}, locale = getCurrentLocale()) {
  let grommetMessages;
  try {
    /* eslint-disable global-require */
    /* eslint-disable import/no-dynamic-require */
    grommetMessages = require(`../messages/${locale}`);
    /* eslint-enable import/no-dynamic-require */
    /* eslint-enable global-require */
  } catch (e) {
    grommetMessages = {};
  }

  const messages = { ...grommetMessages, ...appMessages };

  return { locale, messages };
}
