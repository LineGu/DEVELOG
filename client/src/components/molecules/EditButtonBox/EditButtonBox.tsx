import React, { ReactElement, Dispatch, SetStateAction, useRef, RefObject } from 'react';
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
import { IButtonProps } from '@interfaces';
import axios from 'axios';
import PostPageComponent from '@pages/Post';

const StyledEditButtonBox = styled.div`
  display: flex;
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

interface IEditButtonProps {
  onClick: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
  getImageUrl: Dispatch<SetStateAction<string>>;
}

const upload = async (file: File): Promise<string> => {
  if (file && file.size > 5000000) {
    console.error('파일 용량 초과');
    return '';
  }
  const formData = new FormData();
  formData.append('image', file);

  const imgUrl: string = await fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: {
      Authorization: 'Client-ID 3c6eb25140b4f20',
      Accept: 'application/json',
    },
    body: formData,
  })
    .then((response) => response.json())
    .then((response) => response.data.link)
    .catch(() => console.log('업로드 실패'));

  return imgUrl;
};

function EditButtonBox({ onClick, getImageUrl }: IEditButtonProps): ReactElement {
  return (
    <StyledEditButtonBox
      onMouseDown={(event) => {
        event.stopPropagation();
        event.preventDefault();
      }}
    >
      <BsTypeH1 className="h1" onClick={(event) => onClick(event)} />
      <BsTypeH2 className="h2" onClick={(event) => onClick(event)} />
      <BsTypeH3 className="h3" onClick={(event) => onClick(event)} />
      <BsTypeBold className="bold" onClick={(event) => onClick(event)} />
      <BsTypeItalic className="italic" onClick={(event) => onClick(event)} />
      <BsLink45Deg className="link" onClick={(event) => onClick(event)} />

      <BsFillImageFill
        className="img"
        onClick={(event) => {
          (event.currentTarget.nextSibling as HTMLButtonElement).click();
        }}
      />
      <input
        className="finder"
        type="file"
        accept="image/*,.pdf"
        onChange={async (event) => {
          const fileList = event.target.files;
          if (fileList === null) return;
          const imgUrl = await upload(fileList[0]);
          getImageUrl(imgUrl);
        }}
        multiple
      />

      <BsBlockquoteLeft className="quote" onClick={(event) => onClick(event)} />
      <BsTable className="table" onClick={(event) => onClick(event)} />
      <BsCode className="code" onClick={(event) => onClick(event)} />
      <BsCheckBox className="checkbox" onClick={(event) => onClick(event)} />
    </StyledEditButtonBox>
  );
}

export default EditButtonBox;
