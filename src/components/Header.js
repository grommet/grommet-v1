import React from 'react';
import Box from './Box';

const SIZE_BASIS = {
  large: 'xsmall',
};

export default ({ pad, size, ...rest }) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    basis={SIZE_BASIS[size] || 'auto'}
    flex={false}
    pad={{ between: 'small', ...pad }}
    {...rest}
  />
);
