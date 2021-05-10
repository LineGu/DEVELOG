import React, { ReactElement } from 'react';
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
import uploadImg from '@utils/uploadImg';
import TableModal from '@atoms/TableModal/index';

interface IEditButtonProps {
  onClick: IOnClickSvgFun;
  setImageUrl: SetStateString;
  setUploadState: SetStateProcess;
}

const StyledEditButtonBox = styled.div`
  display: flex;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  margin: 0 0 2.5rem 3rem;
  pointer-events: none;

  .h3,
  .italic {
    border-right: 1px solid ${() => Theme.INTRO};
    padding-right: 2rem;
  }

  .finder {
    position: absolute;
    visibility: hidden;
  }

  & > svg {
    pointer-events: visibleFill;
    width: 2rem;
    height: 2rem;
    min-width: 1rem;
    min-height: 1rem;
    margin: 0 1rem;
    color: ${() => Theme.INTRO};
    opacity: 60%;
  }

  & > svg:hover,
  & > div > svg:hover {
    opacity: 100%;
    cursor: pointer;
  }
`;

const StyledTableModal = styled(TableModal)`
  top: 40px;
  margin-left: 95%;
`;

function EditButtonBox({ onClick, setImageUrl, setUploadState }: IEditButtonProps): ReactElement {
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
      <BsTable className="table" onClick={onClick} />
      <StyledTableModal />
      <BsCode className="code" onClick={onClick} />
      <BsCheckBox className="checkbox" onClick={onClick} />
    </StyledEditButtonBox>
  );
}

export default EditButtonBox;
