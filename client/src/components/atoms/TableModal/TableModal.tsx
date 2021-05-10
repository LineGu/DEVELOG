import { IComponentProps } from '@interfaces';
import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import { IOnHoverDivFunc } from '@eventInterfaces';

const StyledModal = styled.div`
  display: flex;
  position: absolute;
  margin: 0;
  padding: 0;
  & > p {
    margin: 0;
    padding: 0;
  }
  background-color: ${() => Theme.TAG_PLACEHOLDER};
`;

const StyledBlock = styled.div<{ colorProps: string }>`
  pointer-events: visibleFill;
  width: 10px;
  height: 10px;
  border: 1px solid black;
  background-color: ${({ colorProps }) => colorProps};
  margin: 0;
  padding: 0;
`;

function TableModal({ className }: IComponentProps): ReactElement {
  const [blockCount, setBlockCount] = useState<number>(5);
  const [check, setCheck] = useState<number[]>([-1, -1]);
  const blockIds = new Array(blockCount).fill(0);

  const changeCheckPoint: IOnHoverDivFunc = (event) => {
    const newCheckStr: string[] = event.currentTarget.id.split(',');
    const newCheck = [parseInt(newCheckStr[0], 10), parseInt(newCheckStr[1], 10)];
    setCheck(newCheck);
  };

  return (
    <StyledModal className={className}>
      {blockIds.map((_, index) => {
        return (
          <div key={index}>
            {blockIds.map((__, subIndex) => (
              <StyledBlock
                key={index * 10 + subIndex}
                id={`${subIndex},${index}`}
                onMouseOver={changeCheckPoint}
                colorProps={check[0] >= subIndex && check[1] >= index ? '#000000' : '#ffffff'}
              />
            ))}
          </div>
        );
      })}
    </StyledModal>
  );
}

export default TableModal;
