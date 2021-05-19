import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { BsTable } from 'react-icons/bs';
import { EditorIconProps } from '@interfaces';
import Theme from '@theme/index';

const StyledTableIcon = styled(BsTable)`
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

function TableIcon({ onClick }: EditorIconProps): ReactElement {
  return <StyledTableIcon id="table" onClick={onClick} />;
}

export default TableIcon;
