import { IComponentProps } from '@interfaces';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';

interface IModalProps extends IComponentProps {
  visibleState: string;
}

const StyledDescriptiveModal = styled.div<{ state: string }>`
  visibility: ${({ state }) => (state === 'hidden' ? 'hidden' : 'visible')};
  position: absolute;
  z-index: 15;
  width: 400px;
  background-color: ${() => Theme.EMPHASIS};
  color: ${() => Theme.HEADER_BACK};
  padding: 10px 20px;
`;

function DescriptiveModal({ visibleState, className, children }: IModalProps): ReactElement {
  return (
    <StyledDescriptiveModal className={className} state={visibleState}>
      {children}
    </StyledDescriptiveModal>
  );
}

export default DescriptiveModal;