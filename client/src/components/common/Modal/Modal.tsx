import { IComponentProps } from '@types';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface IModalProps extends IComponentProps {
  visibleState: string;
}

const StyledDescriptiveModal = styled.div<{ state: string }>`
  visibility: ${({ state }) => (state === 'hidden' ? 'hidden' : 'visible')};
  position: absolute;
`;

function Modal({ visibleState, className, children }: IModalProps): ReactElement {
  return (
    <StyledDescriptiveModal className={className} state={visibleState}>
      {children}
    </StyledDescriptiveModal>
  );
}

export default Modal;
