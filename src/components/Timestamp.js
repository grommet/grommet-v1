import React from 'react';
import { Text } from 'grommet';

export default ({ fields, value, ...rest }) => {
  const date = new Date(value);
  let content;
  if (fields === 'date') {
    content = date.toLocaleDateString(undefined,
      { year: 'numeric', month: 'short', day: 'numeric' });
  } else if (fields === 'time') {
    content = date.toLocaleTimeString(undefined,
      { hour: 'numeric', minute: '2-digit' });
  } else {
    content = date.toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  }
  return (
    <Text {...rest}>{content}</Text>
  );
};
