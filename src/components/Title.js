import React, { Children } from 'react';
import { Box, Text } from 'grommet';

export default ({ children, ...rest }) => {
  const styledChildren = Children.map(children, (child, index) => {
    if (child) {
      if (index !== (Children.count(children) - 1)) {
        return <Box margin={{ right: 'small' }}>{child}</Box>;
      }
      return <Text size='large'>{child}</Text>;
    }
    return child;
  });
  return (
    <Box direction='row' align='center' {...rest}>
      {styledChildren}
    </Box>
  );
};
