import React, { Children, cloneElement } from 'react';
import Box from './Box';

export default ({ children, flush, ...rest }) => {
  let tiles = children;
  if (!flush) {
    tiles = Children.map(children, (child) => {
      if (child) {
        const style = {
          ...(child.props || {}).style,
          margin: '12px',
        };
        return cloneElement(child, { style });
      }
      return child;
    });
  }
  return (
    <Box
      direction='row'
      wrap={true}
      justify='start'
      pad='small'
      flex='grow'
      basis='auto'
      {...rest}
    >
      {tiles}
    </Box>
  );
};
