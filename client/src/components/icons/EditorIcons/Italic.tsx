import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { BsTypeItalic } from 'react-icons/bs';
import { EditorIconProps } from '@interfaces';
import Theme from '@theme/index';

const StyledItalicIcon = styled(BsTypeItalic)`
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

function ItalicIcon({ onClick }: EditorIconProps): ReactElement {
  return <StyledItalicIcon id="italic" onClick={onClick} />;
}

export default ItalicIcon;
