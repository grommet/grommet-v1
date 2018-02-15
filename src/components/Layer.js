import React from 'react';
import { Box, Button, Layer, Stack } from 'grommet';
import { Close } from 'grommet-icons';

export default ({ align, children, closer, flush, hidden, onClose, overlayClose, ...rest }) => {
  let content = children;
  if (!flush) {
    content = <Box pad={{ horizontal: 'large' }}>{content}</Box>;
  }
  if (closer && onClose) {
    content = (
      <Stack anchor='top-right'>
        {content}
        <Button icon={<Close />} onClick={onClose} />
      </Stack>
    );
  }
  return (
    <Layer
      position={align || (hidden ? 'hidden' : undefined)}
      onClickOverlay={overlayClose ? onClose : undefined}
      {...rest}
    >
      {content}
    </Layer>
  );
};
