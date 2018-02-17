import React from 'react';
import { Meter, Stack } from 'grommet';
import { colorIndexToColor } from '../utils/color';

export default ({
  activeIndex, colorIndex, label, max, onActive, series, size, type, units,
  value, ...rest
}) => {
  let normalizedMax = max;
  if (!normalizedMax) {
    if (series) {
      let total = 0;
      series.forEach((s) => { total += s.value; });
      normalizedMax = Math.max(100, total);
    } else {
      normalizedMax = Math.max(100, value);
    }
  }
  const scale = 100.0 / normalizedMax;

  let values;
  if (series) {
    values = series.map((s, index) => ({
      color: ((activeIndex === undefined || activeIndex === index) ?
        (colorIndexToColor(s.colorIndex) || 'accent-1') :
        { color: 'light-2', opacity: 'medium' }),
      onClick: s.onClick,
      onHover: (onActive ? over => onActive(over ? index : undefined) : undefined),
      label: s.label,
      value: s.value * scale,
    }));
  } else if (value !== undefined) {
    values = [{
      color: (colorIndexToColor(colorIndex) || 'accent-1'),
      label,
      value: value * scale,
    }];
  }

  let content = (
    <Meter
      background={{ color: 'light-3', opacity: 'medium' }}
      type={type}
      size={size}
      {...rest}
      values={values}
    />
  );

  if (type === 'circle') {
    content = (
      <Stack anchor='center'>
        {content}
        {label}
      </Stack>
    );
  }

  return content;
};
