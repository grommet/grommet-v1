import React from 'react';
import { Text } from 'grommet';

export default ({ defaultMessage, ...rest }) => (
  <Text {...rest}>{defaultMessage}</Text>
);
