import React from 'react';
import { Anchor, RoutedAnchor } from 'grommet';

export default props =>
  (props.path ? <RoutedAnchor {...props} /> : <Anchor {...props} />);
