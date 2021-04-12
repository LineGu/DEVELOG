import React, { ReactElement, Dispatch, SetStateAction, useRef, useEffect } from 'react';
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

  & > svg {
    pointer-events: visibleFill;
    width: 2rem;
    height: 2rem;
    margin: 0 1rem;
    color: ${() => Theme.INTRO};
    opacity: 60%;
  }

  & > svg:hover {
    opacity: 100%;
    cursor: pointer;
  }
`;

interface IEditButtonProps {
  onClick: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

function EditButtonBox({ onClick }: IEditButtonProps): ReactElement {
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
      <BsFillImageFill className="img" onClick={(event) => onClick(event)} />
      <BsBlockquoteLeft className="quote" onClick={(event) => onClick(event)} />
      <BsTable className="table" onClick={(event) => onClick(event)} />
      <BsCode className="code" onClick={(event) => onClick(event)} />
      <BsCheckBox className="checkbox" onClick={(event) => onClick(event)} />
    </StyledEditButtonBox>
  );
}

export default EditButtonBox;
