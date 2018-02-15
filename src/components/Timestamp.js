import React from 'react';
import moment from 'moment';
import { Text } from 'grommet';

export default ({ fields, value, ...rest }) => {
  const date = moment(value);
  let format;
  if (fields === 'date') {
    format = 'LL';
  } else if (fields === 'time') {
    format = 'LT';
  } else {
    format = 'LLL';
  }
  return (
    <Text {...rest}>{date.format(format)}</Text>
  );
};
