import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  width: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
`;

export default ({ label, ...rest }) =>
  <StyledAnchor {...rest}>{label}</StyledAnchor>;
