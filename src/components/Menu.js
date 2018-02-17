import React, { Children, cloneElement } from 'react';
import { Box, DropButton, Menu } from 'grommet';
import { colorIndexToColor } from '../utils/color';

export default ({
  children, colorIndex, direction, dropAlign, fill, icon, inline, label, primary, ...rest
}) => {
  const background = colorIndex ? colorIndexToColor(colorIndex) : undefined;
  let content;
  if (primary || inline || (!icon && !label)) {
    const styledChildren = Children.map(children, (child) => {
      if (child) {
        const style = {
          ...(child.props || {}).style,
          padding: '12px 24px',
        };
        if (primary) {
          style.fontSize = '19px';
          style.lineHeight = '24px';
        }
        return cloneElement(child, { style });
      }
      return child;
    });
    // Should we have Grommet Box set overflow when flexing?
    content = (
      <Box
        direction={direction}
        flex={fill ? true : undefined}
        overflow={fill ? 'auto' : undefined}
        background={background}
        {...rest}
      >
        {styledChildren}
      </Box>
    );
  } else if (children && (icon || label)) {
    content = (
      <DropButton
        align={dropAlign}
        control={(
          <Box direction='row' align='center' pad='small'>
            {icon}
            {label}
          </Box>
        )}
      >
        <Box background={background}>
          {children}
        </Box>
      </DropButton>
    );
  } else {
    content = (
      <Menu icon={icon} label={label} background={background} {...rest} />
    );
  }
  return content;
};
