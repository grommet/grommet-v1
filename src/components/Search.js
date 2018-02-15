import React from 'react';
import { Box, TextInput } from 'grommet';

export default ({ fill, inline, ...rest }) => {
  let content = <TextInput type='search' {...rest} />;
  if (fill) {
    content = <Box flex={true}>{content}</Box>;
  }
  return content;
};
