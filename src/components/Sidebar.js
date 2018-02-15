import React from 'react';
import Box from './Box';

export default ({ size, ...rest }) => (
  <Box tag='aside' flex={false} basis={size || 'medium'} {...rest} />
);
