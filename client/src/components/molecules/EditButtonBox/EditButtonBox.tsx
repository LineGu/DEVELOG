import React, { ReactElement, Dispatch, SetStateAction } from 'react';
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
import axios from 'axios';

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
  setImageUrl: Dispatch<SetStateAction<string>>;
}

const headerOption = {
  Authorization: 'Client-ID 3c6eb25140b4f20',
  Accept: 'application/json',
};

const upload = async (file: File): Promise<string> => {
  if (file && file.size > 5000000) {
    console.error('파일 용량 초과');
    return '';
  }
  const formData = new FormData();
  formData.append('image', file);

  const imgUrl: string = await axios
    .post('https://api.imgur.com/3/image', formData, {
      headers: headerOption,
      onUploadProgress: (ProgressEvent) => {
        console.log(`uploading${Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100)}%`);
      },
    })
    .then((response) => response.data.data.link)
    .catch((err) => console.log(err));

  return imgUrl;
};

function EditButtonBox({ onClick, setImageUrl }: IEditButtonProps): ReactElement {
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
          setImageUrl(imgUrl);
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
