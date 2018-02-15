import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Blank } from 'grommet-icons';

export default class extends Component {
  static contextTypes = {
    theme: PropTypes.object,
  };

  render() {
    const { a11yTitle, colorIndex, ...rest } = this.props;
    const { theme } = this.context;

    let color;
    if (colorIndex) {
      const parts = colorIndex.split('-');
      if (parts.length > 1) {
        color = theme.global.colors[parts[0]][parts[1]];
      } else {
        color = theme.global.colors[parts[0]];
      }
    }

    return (
      <Blank stroke={color} style={{ fill: 'none' }} {...rest} />
    );
  }
}
