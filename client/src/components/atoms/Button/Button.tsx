import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IButtonProps, IComponentProps } from '@interfaces';

const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 1.5em;
  outline: none;
  border: none;
  border-radius: 0.3em;
`;

function Button({ onClick, children, className }: IButtonProps & IComponentProps): ReactElement {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
