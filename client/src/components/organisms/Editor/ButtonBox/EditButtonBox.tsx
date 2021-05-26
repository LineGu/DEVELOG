import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import { H1, H2, H3, Bold, Italic, Link, Quote, Code, CheckBox } from '@icons/index';
import { IUploadState } from '@interfaces';
import { Editors, tableEditor } from '@utils/markdownEditor';
import TableEditor from '@utils/markdownEditor/Editors/Table';
import TableButton from './TableButton';
import ImgButton from './ImgButtons';

interface IEditButtonProps {
  editButtonProps: {
    inputAreaElem: React.RefObject<HTMLTextAreaElement>;
    setUploadState: React.Dispatch<React.SetStateAction<IUploadState>>;
    moveCursor: (positionToGo: number[]) => void;
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    cursorPosition: number[];
  };
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

function EditButtonBox({ editButtonProps }: IEditButtonProps): ReactElement {
  const { input, setInput, setUploadState, moveCursor, cursorPosition } = editButtonProps;
  const currentCursorIndex = cursorPosition[0];

  const onClickEditButton = (editType: string): void => {
    const editor = Editors[editType];
    const updatedInput = editor.onClickEditButton({ input, currentCursorIndex, moveCursor });
    setInput(updatedInput);
  };

  const onClickTableButton = (tableCount: number[]) => {
    const updatedInput = tableEditor.onClickEditButton({ input, currentCursorIndex, moveCursor, tableCount });
    setInput(updatedInput);
  };

  return (
    <StyledEditButtonBox>
      <H1 onClick={() => onClickEditButton('h1')} />
      <H2 onClick={() => onClickEditButton('h2')} />
      <H3 onClick={() => onClickEditButton('h3')} />
      <Bold onClick={() => onClickEditButton('bold')} />
      <Italic onClick={() => onClickEditButton('italic')} />
      <Link onClick={() => onClickEditButton('link')} />
      <ImgButton onClick={onClickEditButton} setUploadState={setUploadState} />
      <Quote onClick={() => onClickEditButton('quote')} />
      <TableButton onClick={onClickTableButton} />
      <Code onClick={() => onClickEditButton('code')} />
      <CheckBox onClick={() => onClickEditButton('checkbox')} />
    </StyledEditButtonBox>
  );
}

export default EditButtonBox;
