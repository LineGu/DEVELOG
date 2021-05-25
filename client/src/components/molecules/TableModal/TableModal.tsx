import { IComponentProps, IEditFuncProps } from '@interfaces';
import React, { ReactElement, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import { setStateBool } from '@types';
import Block from './Block';

interface ITableModalProps extends IComponentProps {
  onClick: IEditFuncProps;
  isHidden: boolean;
  setIsHidden: setStateBool;
}

const StyledModal = styled.div<{ isHidden: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  position: absolute;
  flex-direction: column;
  margin: 0;
  padding: 5px 15px 10px 15px;
  border-radius: 0.2em;
  pointer-events: visibleFill;
  background-color: ${() => Theme.MODAL_EDIT};

  & > span {
    margin: 5px 0px;
    color: ${() => Theme.HEADER_BACK};
  }
`;

function TableModal({ className, onClick, isHidden, setIsHidden }: ITableModalProps): ReactElement {
  const initValueCheckedPoint = [-1, -1];
  const [checkedPoint, setCheckedPoint] = useState<number[]>(initValueCheckedPoint);
  const [xPoint, yPoint] = checkedPoint;

  const resetCheckedPoint = useCallback(() => setCheckedPoint(initValueCheckedPoint), []);

  const hideTableModal = useCallback(() => {
    setIsHidden(true);
    resetCheckedPoint();
  }, []);

  const blockPorps = { checkedPoint, onClick, setCheckedPoint, resetCheckedPoint };

  const printCurrentCheckedPoint = useCallback(() => {
    const isChecked = checkedPoint[0] !== initValueCheckedPoint[0];
    const [rowCount, columnCount] = [xPoint + 1, yPoint + 1];
    return isChecked ? `${rowCount} x ${columnCount} 표` : '표 삽입';
  }, [checkedPoint]);

  useEffect(() => {
    document.addEventListener('click', hideTableModal);
    document.addEventListener('mouseover', resetCheckedPoint);
  }, []);

  return (
    <StyledModal isHidden={isHidden} className={className}>
      <span>{printCurrentCheckedPoint()}</span>
      <Block blockPorps={blockPorps} />
    </StyledModal>
  );
}

export default TableModal;
