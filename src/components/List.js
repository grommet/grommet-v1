import React from 'react';
import Box from './Box';

export default ({ selectable, ...rest }) =>
  <Box tag='ul' margin='none' pad='none' flex={true} overflow='auto' {...rest} />;
