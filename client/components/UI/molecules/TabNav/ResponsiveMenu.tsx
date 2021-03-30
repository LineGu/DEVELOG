import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IoIosMenu } from 'react-icons/io';

const StyledResonsiveMenu = styled.div`
  postion: absolute;
  margin-left: ${() => window.innerWidth / 20}%;
  display: none;
  margin-top: 7%;
  @media (max-width: 600px) {
    display: block;
  }
`;

const StyledIcon = styled(IoIosMenu)`
  width: 40px;
  height: 40px;
`;

function ResponsiveMenu(): ReactElement {
  return (
    <StyledResonsiveMenu>
      <StyledIcon />
    </StyledResonsiveMenu>
  );
}

export default ResponsiveMenu;
