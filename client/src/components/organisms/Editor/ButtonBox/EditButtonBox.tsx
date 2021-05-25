import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import { H1, H2, H3, Bold, Italic, Link, Image, Quote, Table, Code, CheckBox } from '@icons/index';
import { IOnClickSvgFunc, IOnChangeFileFunc } from '@eventInterfaces';
import { SetStateProcess, SetStateString } from '@types';
import { ITableProps, IEditFuncProps } from '@interfaces';
import uploadImg from '@utils/uploadImg';
import TableModal from '@molecules/TableModal/index';
import Finder from '@atoms/Finder';

interface IEditButtonProps {
  onClick: IEditFuncProps;
  tableProps: ITableProps;
  setImageUrl: SetStateString;
  setUploadState: SetStateProcess;
}

const StyledEditButtonBox = styled.div`
  display: flex;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 20px 60px;
  pointer-events: none;

  @media (max-width: ${() => Theme.MOBILE}) {
    flex-wrap: nowrap;
    margin: 0.2em 0.5em 1em 0.5em;
    pointer-events: auto;
  }

  @media (max-width: ${() => Theme.PC}) {
    flex-wrap: nowrap;
  }

  & > svg,
  & > div > svg {
    margin: 0 20px 15px 20px;
    @media (max-width: ${() => Theme.MOBILE}) {
      margin: 0 0.5em;
    }
  }
`;

const TableWrapper = styled.div`
  & > div:not(#table) {
    margin-left: 2%;
  }
  @media (max-width: ${() => Theme.MOBILE}) {
    display: none;
  }
`;

function EditButtonBox({ onClick, tableProps, setImageUrl, setUploadState }: IEditButtonProps): ReactElement {
  const [isHiddenTableModal, setIsHidden] = useState<boolean>(true);

  const selectImgAndUpload: IOnChangeFileFunc = async (event) => {
    const { 0: file } = event.target.files as FileList;
    if (!file) return;
    uploadImg(file, setUploadState, setImageUrl);
  };

  const openFinder: IOnClickSvgFunc = (event) => {
    const finderElem = event.currentTarget.nextSibling as HTMLButtonElement;
    finderElem.click();
  };

  const controlTableModal: IOnClickSvgFunc = (event) => {
    setIsHidden(!isHiddenTableModal);
    event.stopPropagation();
  };

  return (
    <StyledEditButtonBox>
      <H1 onClick={onClick} />
      <H2 onClick={onClick} />
      <H3 onClick={onClick} />
      <Bold onClick={onClick} />
      <Italic onClick={onClick} />
      <Link onClick={onClick} />
      <>
        <Image onClick={openFinder} />
        <Finder onChange={selectImgAndUpload} />
      </>
      <Quote onClick={onClick} />
      <TableWrapper>
        <Table onClick={controlTableModal} />
        <TableModal isHidden={isHiddenTableModal} onClick={onClick} setIsHidden={setIsHidden} />
      </TableWrapper>
      <Code onClick={onClick} />
      <CheckBox onClick={onClick} />
    </StyledEditButtonBox>
  );
}

export default EditButtonBox;
