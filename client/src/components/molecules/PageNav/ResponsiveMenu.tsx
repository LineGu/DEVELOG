import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { MenuIcon } from '@icons/index';
import Theme from '@theme/index';

interface IResponsiveMenuProps {
  onClick: () => void;
}

const StyledResonsiveMenu = styled.div`
  display: none;
  position: absolute;

  &:hover {
    color: ${() => Theme.BLACK};
    cursor: pointer;
  }

  @media (max-width: ${() => Theme.PC}) {
    display: block;
    margin-bottom: 1%;
    left: 90vw;
    color: ${() => Theme.BASE};
  }
`;

function ResponsiveMenu({ onClick }: IResponsiveMenuProps): ReactElement {
  return (
    <StyledResonsiveMenu onClick={onClick}>
      <MenuIcon />
    </StyledResonsiveMenu>
  );
}

export default ResponsiveMenu;
