import React from 'react';
import { Box, Text } from 'grommet';

const VALUE_SIZES = {
  xsmall: 'medium',
  small: 'large',
  medium: 'xlarge',
  large: 'xlarge',
};

export default ({
  colorIndex, icon, label, size, trendIcon, units, value, ...rest
}) => (
  <Box align='center' {...rest}>
    <Box direction='row' align='center'>
      {icon}
      <Text color={colorIndex} size={VALUE_SIZES[size]}>
        <strong>{value}</strong>
      </Text>
      {units ? (
        <Box margin={{ left: 'xsmall' }}>
          <Text color={colorIndex} size={VALUE_SIZES[size]}>{units}</Text>
        </Box>
      ) : null}
      {trendIcon}
    </Box>
    {label ? <Text>{label}</Text> : null}
  </Box>
);
