import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IoIosMenu } from 'react-icons/io';

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

const StyledIcon = styled(IoIosMenu)`
  width: 8vw;
  height: 8vw;
  max-width: 40px;
  max-height: 40px;
`;

function ResponsiveMenu({ onClick }: ResponsiveMenuProps): ReactElement {
  return (
    <StyledResonsiveMenu onClick={onClick}>
      <StyledIcon />
    </StyledResonsiveMenu>
  );
}

export default ResponsiveMenu;
