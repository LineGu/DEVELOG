import React, { ReactElement, SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import { IComponentProps } from '@interfaces';

interface IWritingAreaProps extends IComponentProps {
  propsAboutTextComponent: {
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    setCursorPosition: Dispatch<SetStateAction<number[]>>;
    findCursorPoint: (element: HTMLTextAreaElement) => number[];
    inputAreaElem: React.RefObject<HTMLTextAreaElement>;
  };
}

const StyledMarkdownArea = styled.textarea`
  width: 100%;
  height: 68vh;
  padding-left: 3vw;
  font-size: 1.5rem;
  pointer-events: auto;

  background-color: ${() => Theme.HEADER_BACK};

  color: ${() => Theme.INTRO};
  border: none;

  outline: none;
  resize: none;
  @media (max-width: ${() => Theme.TABLET}) {
    width: 100%;
    border: none;
  }

  &::selection {
    background-color: #dfdfdf;
  }
`;

function WritingArea({ propsAboutTextComponent, className }: IWritingAreaProps): ReactElement {
  const { input, setInput, setCursorPosition, findCursorPoint, inputAreaElem } = propsAboutTextComponent;
  return (
    <StyledMarkdownArea
      className={className}
      spellCheck="false"
      placeholder="이야기를 적어보세요.."
      value={input}
      onChange={(event) => {
        setInput(event.target.value);
      }}
      onClick={() => setCursorPosition(findCursorPoint(inputAreaElem.current as HTMLTextAreaElement))}
      onKeyUp={(event) => {
        const cursorFinder = setTimeout(
          () => setCursorPosition(findCursorPoint(inputAreaElem.current as HTMLTextAreaElement)),
          400,
        );
        event.target.addEventListener('keyup', () => clearTimeout(cursorFinder));
      }}
      ref={inputAreaElem}
    />
  );
}

export default WritingArea;
