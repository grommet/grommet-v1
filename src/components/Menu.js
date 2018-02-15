import React, { Children, cloneElement } from 'react';
import { Box, DropButton, Menu } from 'grommet';

export default ({
  children, direction, fill, icon, inline, label, primary, ...rest
}) => {
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
        {...rest}
      >
        {styledChildren}
      </Box>
    );
  } else if (children && (icon || label)) {
    content = (
      <DropButton
        control={(
          <Box direction='row' align='center'>
            {icon}
            {label}
          </Box>
        )}
      >
        {children}
      </DropButton>
    );
  } else {
    content = <Menu icon={icon} label={label} {...rest} />;
  }
  return content;
};
