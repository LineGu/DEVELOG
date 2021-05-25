import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import { IUploadState } from '@interfaces';

interface IPropcessBarProps {
  uploadState: IUploadState;
}

const StyledProcessBar = styled.hr<{ process: number }>`
  position: fixed;
  visibility: ${({ process }) => (process === 0 ? 'hidden' : 'visible')};
  width: ${({ process }) => process}vw;
  border: 8px solid ${() => Theme.HOVER_POINT};
  margin: 0;
  top: 0;
  left: 0;
`;

function ProcessBar({ uploadState }: IPropcessBarProps): ReactElement {
  return <StyledProcessBar process={uploadState.process !== 0 ? uploadState.process : 0} />;
}

export default ProcessBar;
