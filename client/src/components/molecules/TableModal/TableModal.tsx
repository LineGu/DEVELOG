import { IComponentProps, ITableProps } from '@interfaces';
import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import { IOnHoverDivFunc } from '@eventInterfaces';

import { setStateBool } from '@types';
import addTable from '@utils/addTable';

interface ITableModalProps extends IComponentProps {
  tableProps: ITableProps;
  isHidden: boolean;
  setIsHidden: setStateBool;
}

const StyledModal = styled.div<{ isHidden: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  flex-direction: column;
  pointer-events: visibleFill;
  position: absolute;
  margin: 0;
  padding: 5px 15px 10px 15px;
  border-radius: 0.2em;
  & > span {
    color: ${() => Theme.HEADER_BACK};
    margin-bottom: 5px;
  }
  & > div {
    display: flex;
    margin: 0;
    padding: 0;
  }
  background-color: ${() => Theme.MODAL_EDIT};
`;

const StyledBlock = styled.div<{ colorProps: string }>`
  width: 20px;
  height: 20px;
  border: 1px solid ${({ colorProps }) => (colorProps === Theme.HEADER_BACK ? Theme.OUT_LINE : Theme.HEADER_BACK)};
  background-color: ${({ colorProps }) => colorProps};
  margin: 2px;
  padding: 0;
`;

function TableModal({ className, tableProps, isHidden, setIsHidden }: ITableModalProps): ReactElement {
  const [check, setCheck] = useState<number[]>([-1, -1]);
  const rowCount = new Array(10).fill(0);
  const columnCount = new Array(8).fill(0);

  const changeCheckPoint: IOnHoverDivFunc = (event) => {
    const newCheckStr: string[] = event.currentTarget.id.split(',');
    const newCheck = [parseInt(newCheckStr[0], 10), parseInt(newCheckStr[1], 10)];
    setCheck(newCheck);
    event.stopPropagation();
  };

  useEffect(() => {
    const hideTableModal = () => {
      setIsHidden(true);
      setCheck([-1, -1]);
    };
    document.addEventListener('click', hideTableModal);
    document.addEventListener('mouseover', (event) => {
      setCheck([-1, -1]);
      event.stopPropagation();
    });
  }, []);

  return (
    <StyledModal
      isHidden={isHidden}
      className={className}
      onMouseLeave={() => setCheck([-1, -1])}
      onMouseOver={(event) => {
        setCheck([-1, -1]);
        event.stopPropagation();
      }}
    >
      <span>{check[0] === -1 ? '표 삽입' : `${check[0] + 1} x ${check[1] + 1} 표`}</span>
      {columnCount.map((__, index) => {
        return (
          <div
            className="tablePre"
            key={index}
            onMouseLeave={(event) => event.stopPropagation()}
            onMouseOver={(event) => event.stopPropagation()}
            onFocus={() => setCheck([-1, -1])}
            onClick={() => {
              const newTableProps = { tableCount: [check[0] + 1, check[1] + 1], ...tableProps };
              addTable(newTableProps);
              setCheck([-1, -1]);
            }}
          >
            {rowCount.map((_, subIndex) => (
              <StyledBlock
                key={index * 10 + subIndex}
                id={`${subIndex},${index}`}
                onMouseOver={changeCheckPoint}
                onMouseLeave={(event) => event.stopPropagation()}
                colorProps={check[0] >= subIndex && check[1] >= index ? Theme.HEADER_BACK : Theme.MODAL_EDIT}
              />
            ))}
          </div>
        );
      })}
    </StyledModal>
  );
}

export default TableModal;
