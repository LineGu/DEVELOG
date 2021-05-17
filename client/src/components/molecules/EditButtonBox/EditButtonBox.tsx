import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import {
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsTypeBold,
  BsTypeItalic,
  BsLink45Deg,
  BsFillImageFill,
  BsBlockquoteLeft,
  BsTable,
  BsCode,
  BsCheckBox,
} from 'react-icons/bs';

import { IOnClickSvgFun, IOnChangeFileFunc } from '@eventInterfaces';
import { SetStateProcess, SetStateString } from '@types';
import { ITableProps } from '@interfaces';
import uploadImg from '@utils/uploadImg';
import TableModal from '@atoms/TableModal/index';

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

  margin: 0 0 20px 60px;
  pointer-events: none;
  flex-wrap: wrap;

  @media (max-width: ${() => Theme.MOBILE}) {
    margin: 0.2em 0.5em 1em 0.5em;
    pointer-events: auto;
    flex-wrap: nowrap;
  }

  @media (max-width: ${() => Theme.PC}) {
    flex-wrap: nowrap;
  }

  .h3,
  .italic {
    border-right: 1px solid ${() => Theme.INTRO};
    padding-right: 1.6vw;
    @media (max-width: ${() => Theme.MOBILE}) {
      padding-right: 1em;
    }
  }

  .finder {
    position: absolute;
    visibility: hidden;
  }

  & > svg,
  & > div > svg {
    pointer-events: visibleFill;
    width: 20px;
    height: 20px;
    margin: 0 20px 15px 20px;
    color: ${() => Theme.INTRO};
    opacity: 60%;
    @media (max-width: ${() => Theme.MOBILE}) {
      width: 15px;
      height: 15px;
      margin: 0 0.5em;
    }
  }

  .table {
    margin-top: 0.3em;
    @media (max-width: ${() => Theme.MOBILE}) {
      display: none;
    }
  }

  & > svg:hover,
  & > div > svg:hover {
    opacity: 100%;
    cursor: pointer;
  }
`;

const StyledTableModal = styled(TableModal)`
  margin-left: 2%;
`;

function EditButtonBox({ onClick, tableProps, setImageUrl, setUploadState }: IEditButtonProps): ReactElement {
  const [isHiddenTableModal, setIsHidden] = useState<boolean>(true);
  const createImgUrl: IOnChangeFileFunc = async (event) => {
    const fileList = event.target.files;
    if (fileList === null) return;
    const imgToUpload = fileList[0];
    uploadImg(imgToUpload, setUploadState, setImageUrl);
  };

  const triggerInputElem: IOnClickSvgFun = (event) => {
    (event.currentTarget.nextSibling as HTMLButtonElement).click();
  };

  return (
    <StyledEditButtonBox>
      <BsTypeH1 className="h1" onClick={onClick} />
      <BsTypeH2 className="h2" onClick={onClick} />
      <BsTypeH3 className="h3" onClick={onClick} />
      <BsTypeBold className="bold" onClick={onClick} />
      <BsTypeItalic className="italic" onClick={onClick} />
      <BsLink45Deg className="link" onClick={onClick} />
      <BsFillImageFill className="img" onClick={triggerInputElem} />
      <input className="finder" type="file" accept="image/*,.pdf" onChange={createImgUrl} />
      <BsBlockquoteLeft className="quote" onClick={onClick} />
      <div>
        <BsTable
          id="table"
          className="table"
          onClick={(event) => {
            setIsHidden(!isHiddenTableModal);
            event.stopPropagation();
          }}
        />
        <StyledTableModal isHidden={isHiddenTableModal} tableProps={tableProps} setIsHidden={setIsHidden} />
      </div>
      <BsCode className="code" onClick={onClick} />
      <BsCheckBox className="checkbox" onClick={onClick} />
    </StyledEditButtonBox>
  );
}

export default EditButtonBox;
