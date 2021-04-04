import React, { ReactElement } from 'react';
import styled from 'styled-components';
import MenuIcon from '@atoms/MenuIcon/index';
import Theme from '@theme/index';

type ResponsiveMenuProps = {
  onClick: () => void;
};

const StyledResonsiveMenu = styled.div`
  position: absolute;
  display: none;
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

function ResponsiveMenu({ onClick }: ResponsiveMenuProps): ReactElement {
  return (
    <StyledResonsiveMenu onClick={onClick}>
      <MenuIcon />
    </StyledResonsiveMenu>
  );
}

export default ResponsiveMenu;
