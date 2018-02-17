import React from 'react';
import { Box, Button, Text } from 'grommet';
import { colorIndexToColor } from '../utils/color';

const Item = ({
  colorIndex, index, label, onActive, onClick, total, units, value,
}) => {
  let content = (
    <Box
      direction='row'
      align='center'
      justify='between'
      pad={total ? { top: 'xsmall' } : undefined}
      onMouseOver={onActive ? () => onActive(index) : undefined}
      onMouseOut={onActive ? () => onActive(undefined) : undefined}
    >
      <Box direction='row' align='center' justify='start'>
        <Box
          pad='xsmall'
          background={colorIndexToColor(colorIndex)}
          margin={{ right: 'small' }}
        />
        <Box margin={{ right: 'medium' }}>
          <Text>{label}</Text>
        </Box>
      </Box>
      <Box direction='row' align='center' justify='end'>
        <Text>{value}</Text>
        {units ? (
          <Box margin={{ left: 'xsmall' }}>
            <Text>{units}</Text>
          </Box>
        ) : null}
      </Box>
    </Box>
  );

  if (onClick) {
    content = (
      <Button
        plain={true}
        hoverIndicator='light-2'
        onClick={onClick ? () => onClick() : undefined}
      >
        {content}
      </Button>
    );
  }

  return (
    <Box
      border={total ? 'top' : undefined}
      margin={total ? { top: 'xsmall' } : undefined}
    >
      {content}
    </Box>
  );
};

export default ({ activeIndex, onActive, series, size, total, units, ...rest }) => {
  let sum = 0;
  return (
    <Box flex={true} {...rest}>
      {series.map((data, index) => {
        sum += data.value;
        return (
          <Item
            key={data.label}
            activeIndex={activeIndex}
            index={index}
            onActive={onActive}
            {...data}
            units={units}
          />
        );
      })}
      {total ? <Item label='Total' value={sum} units={units} total={true} /> : null}
    </Box>
  );
};
