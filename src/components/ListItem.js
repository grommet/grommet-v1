import React from 'react';
import { Button } from 'grommet';
import Box from './Box';

export default ({ onClick, separator, ...rest }) => {
  if (onClick) {
    return (
      <Box tag='li' flex={false} basis='auto' border={separator || 'bottom'}>
        <Button onClick={onClick}>
          <Box
            direction='row'
            justify='between'
            align='center'
            pad={{ horizontal: 'medium', vertical: 'small' }}
            {...rest}
          />
        </Button>
      </Box>
    );
  }
  return (
    <Box
      tag='li'
      direction='row'
      justify='between'
      align='center'
      border={separator || 'bottom'}
      pad={{ horizontal: 'medium', vertical: 'small' }}
      basis='auto'
      flex={false}
      {...rest}
    />
  );
};
