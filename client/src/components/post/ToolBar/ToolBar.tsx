import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import Buttons from '@components/post/ToolBar/Buttons';
import { IUploadState } from '@types';
import { Editors, tableEditor } from 'src/markdownController/ToolBarEditors';

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
    flex-wrap: wrap;
  }

  & > svg,
  & > div > svg {
    margin: 0 20px 15px 20px;
    @media (max-width: ${() => Theme.MOBILE}) {
      margin: 0 0.5em;
    }
  }
`;

function ToolBar({ editButtonProps }: IEditButtonProps): ReactElement {
  const { input, setInput, setUploadState, moveCursor, cursorPosition } = editButtonProps;

  const onClickEditButton = (editType: string): void => {
    const editor = Editors[editType];
    const updatedInput = editor.onClickEditButton({ input, cursorPosition, moveCursor });
    setInput(updatedInput);
  };

  const onClickTableButton = (tableCount: number[]) => {
    const updatedInput = tableEditor.onClickEditButton({ input, cursorPosition, moveCursor, tableCount });
    setInput(updatedInput);
  };

  return (
    <StyledEditButtonBox>
      <Buttons.H1 onClick={() => onClickEditButton('h1')} />
      <Buttons.H2 onClick={() => onClickEditButton('h2')} />
      <Buttons.H3 onClick={() => onClickEditButton('h3')} />
      <Buttons.Bold onClick={() => onClickEditButton('bold')} />
      <Buttons.Italic onClick={() => onClickEditButton('italic')} />
      <Buttons.Link onClick={() => onClickEditButton('link')} />
      <Buttons.Img onClick={onClickEditButton} setUploadState={setUploadState} />
      <Buttons.Quote onClick={() => onClickEditButton('quote')} />
      <Buttons.Table onClick={onClickTableButton} />
      <Buttons.Code onClick={() => onClickEditButton('code')} />
      <Buttons.CheckBox onClick={() => onClickEditButton('checkbox')} />
    </StyledEditButtonBox>
  );
}

export default ToolBar;
