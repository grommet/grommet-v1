import React, { Children, cloneElement } from 'react';
import { Box, Text } from 'grommet';

export default ({ children, error, help, label, ...rest }) => {
  let header;
  if (error || help || label) {
    header = (
      <Box
        direction='row'
        justify='between'
        align='center'
        pad={{ horizontal: 'small' }}
      >
        <Text>{label}</Text>
        {error ?
          <Text color='status-critical'>{error}</Text> :
          <Text>{help}</Text>
        }
      </Box>
    );
  }

  const adjustedChildren = Children.map(children, (child) => {
    if (child) {
      return cloneElement(child, { plain: true });
    }
    return child;
  });

  return (
    <Box
      border={true}
      pad={{ horizontal: 'small', vertical: (header ? 'xsmall' : 'small') }}
      {...rest}
    >
      {header}
      {adjustedChildren}
    </Box>
  );
};
