import React, { ReactElement, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import useDependencyTheme from '@hook/useDependencyTheme';
import Theme from '@theme/index';
import ThemeButton from '@molecules/ThemeBtn/index';
import EditButtonBox from '@molecules/EditButtonBox/index';
import Button from '@atoms/Button/index';
import editInputText from '@utils/editInputText';
import WritingArea from '@molecules/WritingArea/index';
import PostTitleInput from '@molecules/PostTitleInput/index';
import TagAddingBox from '@organisms/TagAddingBox/index';
import MarkdownPreview from '@molecules/MarkdownPreview/index';

const StyledPostBox = styled.div`
  display: flex;
  position: relative;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal;
  pointer-events: none;

  .editArea {
    width: 50%;
    height: 100vh;
    & > hr {
      position: absolute;
      top: 13vh;
      left: 3vw;
      width: 9vw;
      border: 4px solid ${() => Theme.EMPHASIS};
      padding-bottm: 300px;
    }

    .tagModal {
      top: 13.5em;
    }

    .show {
      animation-name: bounce;
      animation-duration: 0.5s;

      @keyframes bounce {
        0% {
          transform: translate(0%, -50%);
          opacity: 0;
        }
        40% {
          transform: translate(0%, 0%);
        }
        55% {
          transform: translate(0%, -5%);
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`;

const StyledThemeButton = styled(ThemeButton)`
  pointer-events: auto;
  bottom: 7vh;
`;

const StyledButtonBox = styled.div`
  position: absolute;
  right: 42%;
  bottom: 2rem;
  .save {
  }
  .submit {
    background-color: ${() => Theme.SUBMIT_BTN};
  }
`;

const StyledButton = styled(Button)`
  pointer-events: auto;
  margin-right: 0.8em;
  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;

const findCursorPoint = (element: HTMLTextAreaElement): number[] => {
  const cursorPointStart = element?.selectionStart;
  const cursorPointEnd = element?.selectionEnd;
  const cursorPosition = [cursorPointStart, cursorPointEnd];

  return cursorPosition;
};

function PostBox(): ReactElement {
  const [input, setInput] = useState('');
  const isEditText = useRef([false, [0, 0]]);
  const [cursorPosition, setCursorPosition] = useState([0, 0]);
  const [imageUrl, setImageUrl] = useState<string>('');
  const { changeMode } = useDependencyTheme();
  const inputAreaElem = useRef<HTMLTextAreaElement>(null);

  const propsAboutTextComponent = { input, setInput, setCursorPosition, findCursorPoint, inputAreaElem };

  const editTextByButton = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    const cursorPositionToGo = editInputText({ event, input, setInput, cursorPosition });
    isEditText.current = [true, cursorPositionToGo];
    inputAreaElem.current?.focus();
  };

  useEffect(() => {
    if (isEditText.current[0]) {
      const cursorToGo = isEditText.current[1];
      const [startPosition, endPosition] = cursorToGo as number[];

      inputAreaElem.current?.focus();
      inputAreaElem.current?.setSelectionRange(startPosition, endPosition);
      isEditText.current = [false, [0, 0]];
      setCursorPosition(findCursorPoint(inputAreaElem.current as HTMLTextAreaElement));
    }
  }, [input]);

  useEffect(() => {
    if (imageUrl === null || imageUrl === undefined || imageUrl.length === 0) return;

    const newInput = `${input.slice(0, cursorPosition[0])}![](${imageUrl})${input.slice(cursorPosition[0])}`;
    setInput(newInput);
    setImageUrl('');
  }, [imageUrl]);

  return (
    <StyledPostBox>
      <div className="editArea">
        <PostTitleInput />
        <hr />
        <TagAddingBox />
        <EditButtonBox onClick={(event) => editTextByButton(event)} setImageUrl={setImageUrl} />
        <WritingArea className="textInput" propsAboutTextComponent={propsAboutTextComponent} />
      </div>
      <MarkdownPreview input={input} />
      <StyledThemeButton onClick={changeMode} />
      <StyledButtonBox>
        <StyledButton onClick={() => console.log('임시저장')} className="save">
          임시저장
        </StyledButton>
        <StyledButton onClick={() => console.log('등록')} className="submit">
          등록
        </StyledButton>
      </StyledButtonBox>
    </StyledPostBox>
  );
}

export default PostBox;
