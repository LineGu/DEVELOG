import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { BsTypeBold } from 'react-icons/bs';
import { EditorIconProps } from '@interfaces';
import Theme from '@theme/index';

const StyledBoldIcon = styled(BsTypeBold)`
  width: 20px;
  height: 20px;
  color: ${() => Theme.INTRO};
  opacity: 60%;
  pointer-events: visibleFill;
  @media (max-width: ${() => Theme.MOBILE}) {
    width: 15px;
    height: 15px;
  }
  &:hover {
    opacity: 100%;
    cursor: pointer;
  }
`;

function BoldIcon({ onClick }: EditorIconProps): ReactElement {
  return <StyledBoldIcon id="bold" onClick={onClick} />;
}

export default BoldIcon;
