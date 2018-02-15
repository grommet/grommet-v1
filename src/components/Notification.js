import React from 'react';
import { Box, Meter, Text } from 'grommet';
import Status from './icons/Status';

export default ({ message, percentComplete, state, status, ...rest }) => (
  <Box
    direction='row'
    align='center'
    background={status ? `status-${status.toLowerCase()}` : undefined}
    {...rest}
  >
    {status ? (
      <Box margin={{ right: 'medium' }}>
        <Status value={status} color='white' />
      </Box>
    ) : null}
    {message ? <Text>{message}</Text> : null}
    {percentComplete ? (
      <Box direction='row' align='center'>
        <Meter values={[{ value: percentComplete }]} />
        <Text>{percentComplete}%</Text>
      </Box>
    ) : null}
  </Box>
);
