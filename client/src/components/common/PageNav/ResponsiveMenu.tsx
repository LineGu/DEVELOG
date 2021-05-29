import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { MenuIcon } from '@icons';
import Theme from '@constants/Theme';

interface IResponsiveMenuProps {
  onClick: () => void;
}

const StyledResonsiveMenu = styled.div`
  display: none;
  position: absolute;

  &:hover {
    opacity: 50%;
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
