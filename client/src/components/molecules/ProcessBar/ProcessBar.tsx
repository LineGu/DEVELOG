import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import { IUploadState } from '@interfaces';

interface IPropcessBarProps {
  uploadState: IUploadState;
}

const StyledProcessBar = styled.hr<{ progress: number }>`
  position: fixed;
  visibility: ${({ progress }) => (progress === 0 ? 'hidden' : 'visible')};
  width: ${({ progress }) => progress}vw;
  border: 8px solid ${() => Theme.HOVER_POINT};
  margin: 0;
  top: 0;
  left: 0;
`;

function ProcessBar({ uploadState }: IPropcessBarProps): ReactElement {
  return <StyledProcessBar progress={uploadState.progress !== 0 ? uploadState.progress : 0} />;
}

export default ProcessBar;
