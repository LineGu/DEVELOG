import React, { ReactElement } from 'react';
import styled from 'styled-components';
import MenuIcon from '@atoms/menuIcon/index';

type ResponsiveMenuProps = {
  onClick: () => void;
};

const StyledResonsiveMenu = styled.div`
  position: absolute;
  display: none;
  &:hover {
    color: #000000;
    cursor: pointer;
  }

  @media (max-width: 960px) {
    display: block;
    margin-bottom: 1%;
    left: 90vw;
    color: #707070;
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
