import React from 'react';
import { Box } from 'grommet';
import { Cycle } from 'grommet-icons';

export default props => (
  <Box animation='jiggle' {...props}>
    <Cycle />
  </Box>
);
