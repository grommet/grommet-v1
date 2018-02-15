import React from 'react';
import { Button } from 'grommet';
import Box from './Box';

export default ({ onClick, size, ...rest }) => {
  if (onClick) {
    return (
      <Box basis={size}>
        <Button plain={true} onClick={onClick} hoverIndicator='light-2'>
          <Box pad='small' {...rest} />
        </Button>
      </Box>
    );
  }
  return (
    <Box basis={size} {...rest} />
  );
};
