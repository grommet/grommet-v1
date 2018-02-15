import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';

const StyledForm = styled.form`
  width: ${props => (props.compact ? '288px' : '480px')};

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }
`;

export default ({ children, ...rest }) => (
  <StyledForm {...rest}>
    <Box>{children}</Box>
  </StyledForm>
);
