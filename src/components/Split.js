import React, { Children } from 'react';
import { Box } from 'grommet';

export default ({ children, flex, separator, ...rest }) => {
  const adjustedChildren = Children.map(children, (child, index) => {
    if (child &&
      ((index > 0 && flex === 'right') || (index === 0 && flex === 'left'))) {
      return (
        <Box
          flex={true}
          full='vertical'
          border={separator ?
            { side: (index ? 'left' : 'right'), color: 'black' } :
            undefined
          }
        >
          {child}
        </Box>
      );
    }
    return child;
  });
  return <Box direction='row' fill={true} {...rest}>{adjustedChildren}</Box>;
};
