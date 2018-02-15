// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import request from 'superagent';

export const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

// converts object to parameter array, handles arrays
export function buildParams(object) {
  const params = [];
  if (object) {
    Object.keys(object).forEach((property) => {
      const value = object[property];
      if (value !== null && value !== undefined) {
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i += 1) {
            params.push(`${property}=${encodeURIComponent(value[i])}`);
          }
        } else {
          params.push(`${property}=${encodeURIComponent(value)}`);
        }
      }
    });
  }
  return params;
}

// joins params array and adds '?' prefix if needed
export function buildQuery(object) {
  const params = (Array.isArray(object) ? object : buildParams(object));
  return (params.length > 0 ? `?${params.join('&')}` : '');
}

// reject promise of response isn't ok
export function processStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  }
  return Promise.reject(response.statusText || `Error ${response.status}`);
}

// Deprecated superagent functions

let activeHeaders = { ...headers };

let timeout = 10000; // 10s

export default {

  setTimeout(nextTimeout) {
    timeout = nextTimeout;
  },

  setHeaders(nextHeaders) {
    activeHeaders = nextHeaders;
  },

  setHeader(name, value) {
    activeHeaders[name] = value;
  },

  head(uri, params) {
    const op = request.head(uri).query(buildParams(params).join('&'));
    op.timeout(timeout);
    op.set(activeHeaders);
    return op;
  },

  get(uri, params) {
    const op = request.get(uri).query(buildParams(params).join('&'));
    op.timeout(timeout);
    op.set(activeHeaders);
    return op;
  },

  patch(uri, data) {
    const op = request.patch(uri).send(data);
    op.timeout(timeout);
    op.set(activeHeaders);
    return op;
  },

  post(uri, data) {
    const op = request.post(uri).send(data);
    op.timeout(timeout);
    op.set(activeHeaders);
    return op;
  },

  put(uri, data) {
    const op = request.put(uri).send(data);
    op.timeout(timeout);
    op.set(activeHeaders);
    return op;
  },

  del(uri) {
    const op = request.del(uri);
    op.timeout(timeout);
    op.set(activeHeaders);
    return op;
  },
};
