import React from 'react';
import {
  StatusCritical, StatusDisabled, StatusGood, StatusUnknown, StatusWarning,
} from 'grommet-icons';

const VALUE_ICON = {
  critical: StatusCritical,
  disabled: StatusDisabled,
  ok: StatusGood,
  unknown: StatusUnknown,
  warning: StatusWarning,
};

export default ({ value, ...rest }) => {
  const Icon = VALUE_ICON[value.toLowerCase()] || StatusUnknown;
  return <Icon color={`status-${value.toLowerCase()}`} {...rest} />;
};
