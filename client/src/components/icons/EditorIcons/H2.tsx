import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { BsTypeH2 } from 'react-icons/bs';
import { EditorIconProps } from '@types';
import Theme from 'src/constants/Theme';

const StyledH2Icon = styled(BsTypeH2)`
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

function H2Icon({ onClick }: EditorIconProps): ReactElement {
  return <StyledH2Icon id="h2" onClick={onClick} />;
}

export default H2Icon;
