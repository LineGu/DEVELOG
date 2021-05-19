import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { BsCheckBox } from 'react-icons/bs';
import { EditorIconProps } from '@interfaces';
import Theme from '@theme/index';

const StyledCheckBoxIcon = styled(BsCheckBox)`
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

function CheckBoxIcon({ onClick }: EditorIconProps): ReactElement {
  return <StyledCheckBoxIcon id="checkbox" onClick={onClick} />;
}

export default CheckBoxIcon;
