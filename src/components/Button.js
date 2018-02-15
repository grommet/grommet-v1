import React from 'react';
import { Button, RoutedButton } from 'grommet';

export default props =>
  (props.path ? <RoutedButton {...props} /> : <Button {...props} />);
