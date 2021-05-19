import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import {
  H1Icon,
  H2Icon,
  H3Icon,
  BoldIcon,
  ItalicIcon,
  LinkIcon,
  ImageIcon,
  QuoteIcon,
  TableIcon,
  CodeIcon,
  CheckBoxIcon,
} from '@icons/index';
import { IOnClickSvgFun, IOnChangeFileFunc } from '@eventInterfaces';
import { SetStateProcess, SetStateString } from '@types';
import { ITableProps } from '@interfaces';
import uploadImg from '@utils/uploadImg';
import TableModal from '@molecules/TableModal/index';
import Finder from '@atoms/Finder';

interface IEditButtonProps {
  onClick: IOnClickSvgFun;
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

  const createImgUrl: IOnChangeFileFunc = async (event) => {
    const fileList = event.target.files;
    if (!fileList) return;
    const imgToUpload = fileList[0];
    uploadImg(imgToUpload, setUploadState, setImageUrl);
  };

  const openFinder: IOnClickSvgFun = (event) => {
    const finderElem = event.currentTarget.nextSibling as HTMLButtonElement;
    finderElem.click();
  };

  const controlTableModal: IOnClickSvgFun = (event) => {
    setIsHidden(!isHiddenTableModal);
    event.stopPropagation();
  };

  return (
    <StyledEditButtonBox>
      <H1Icon onClick={onClick} />
      <H2Icon onClick={onClick} />
      <H3Icon onClick={onClick} />
      <BoldIcon onClick={onClick} />
      <ItalicIcon onClick={onClick} />
      <LinkIcon onClick={onClick} />
      <ImageIcon onClick={openFinder} />
      <Finder onChange={createImgUrl} />
      <QuoteIcon onClick={onClick} />
      <TableWrapper>
        <TableIcon onClick={controlTableModal} />
        <TableModal isHidden={isHiddenTableModal} tableProps={tableProps} setIsHidden={setIsHidden} />
      </TableWrapper>
      <CodeIcon onClick={onClick} />
      <CheckBoxIcon onClick={onClick} />
    </StyledEditButtonBox>
  );
}

export default EditButtonBox;
