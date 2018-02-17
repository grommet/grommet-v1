import React from 'react';
import { Box, Button, Distribution, Text } from 'grommet';
import { colorIndexToColor } from '../utils/color';

// The grommet-v1 version of Distribution is not as mathematically precise
// as the v1 version, but it is easier to look at. This is because we use
// the closest fixed percentage basis values.

const Cell = ({ value, units }) => {
  let content = (
    <Box
      fill={true}
      align='start'
      justify='start'
      background={colorIndexToColor(value.colorIndex)}
      pad='xsmall'
    >
      <Text size='large'><strong>{value.value}</strong> {units}</Text>
      {value.label ? <Text >{value.label}</Text> : null}
    </Box>
  );
  if (value.onClick) {
    content = (
      <Button plain={true} fill={true} onClick={value.onClick}>
        {content}
      </Button>
    );
  }
  return content;
};

export default ({ series, units, ...rest }) => (
  <Distribution values={series} {...rest}>
    {value => <Cell value={value} units={units} />}
  </Distribution>
);
