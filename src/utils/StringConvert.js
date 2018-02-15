// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

export default {
  toSentenceCase(text) {
    return text.replace(/\w\S*/g, txt =>
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  },

  quoteIfNecessary(text) {
    let result = text;
    // quote if there are embedded spaces
    if (text.indexOf(' ') !== -1) {
      result = `'${text}'`;
    }
    return result;
  },

  unquoteIfNecessary(text) {
    let result = text;
    // remove surrounding quotes
    if ((text[0] === '\'' && text[text.length - 1] === '\'') ||
      (text[0] === '"' && text[text.length - 1] === '"')) {
      result = text.slice(1, text.length - 1);
    }
    return result;
  },
};
