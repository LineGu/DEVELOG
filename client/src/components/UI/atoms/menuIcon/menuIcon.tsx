import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IoIosMenu } from 'react-icons/io';

const StyledIcon = styled(IoIosMenu)`
  width: 8vw;
  height: 8vw;
  max-width: 40px;
  max-height: 40px;
`;

function MenuIcon(): ReactElement {
  return <StyledIcon />;
}

export default MenuIcon;
