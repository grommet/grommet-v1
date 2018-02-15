import React from 'react';
import { Heading } from 'grommet';

export default ({ children, strong, tag, ...rest }) => {
  let level;
  if (tag) {
    const match = tag.match(/.(\d)/);
    if (match) {
      level = parseInt(match[1], 10);
    }
  }
  let content = children;
  if (strong) {
    content = <strong>{content}</strong>;
  }
  return (
    <Heading level={level} margin={{ top: 'none', bottom: 'small' }} {...rest}>
      {content}
    </Heading>
  );
};
