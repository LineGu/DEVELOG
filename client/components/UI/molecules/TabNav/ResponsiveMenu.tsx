import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IoIosMenu } from 'react-icons/io';

const StyledResonsiveMenu = styled.div`
  position: absolute;
  display: none;
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

function ResponsiveMenu(): ReactElement {
  return (
    <StyledResonsiveMenu>
      <StyledIcon />
    </StyledResonsiveMenu>
  );
}

export default ResponsiveMenu;
