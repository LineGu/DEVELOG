import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import { Table } from '@icons/index';
import TableModal from '@molecules/TableModal/index';
import { IOnClickSvgFunc } from '@eventInterfaces';
import { ITableOnClick } from '@interfaces';

const TableWrapper = styled.div`
  & > div:not(#table) {
    margin-left: 2%;
  }
  @media (max-width: ${() => Theme.MOBILE}) {
    display: none;
  }
`;

function TableButton({ onClick }: ITableOnClick): ReactElement {
  const [isHiddenTableModal, setIsHidden] = useState<boolean>(true);

  const controlTableModal: IOnClickSvgFunc = (event) => {
    setIsHidden(!isHiddenTableModal);
    event.stopPropagation();
  };

  return (
    <TableWrapper>
      <Table onClick={controlTableModal} />
      <TableModal isHidden={isHiddenTableModal} setIsHidden={setIsHidden} onClick={onClick} />
    </TableWrapper>
  );
}

export default TableButton;
