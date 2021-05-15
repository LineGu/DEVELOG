import React, { ReactElement, useCallback, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import WritingArea from '@molecules/EditorWritingArea/index';
import PostTitleInput from '@molecules/PostTitleInput/index';
import EditorTagArea from '@molecules/EditorTagArea/index';
import EditButtonBox from '@molecules/EditButtonBox/index';
import editInputText from '@utils/editInputText';
import { IPostInputProps, IUploadState } from '@interfaces';

const EditorAreaWrapper = styled.div<{ process: number }>`
  width: 50%;
  height: 100vh;
  .processBar {
    position: fixed;
    visibility: ${({ process }) => (process === 0 ? 'hidden' : 'visible')};
    margin: 0;
    top: 0;
    left: 0;
    width: ${({ process }) => process}vw;
    border: 8px solid ${() => Theme.HOVER_POINT};
  }
  & > hr:not(processBar) {
    position: absolute;
    top: 13vh;
    left: 3vw;
    width: 9vw;
    border: 4px solid ${() => Theme.EMPHASIS};
  }

  .tagModal {
    top: 13.5em;
  }

  .show {
    animation-name: bounce;
    animation-duration: 0.5s;
  }
`;

const findCursorPoint = (element: HTMLTextAreaElement): number[] => {
  const cursorPointStart = element?.selectionStart;
  const cursorPointEnd = element?.selectionEnd;
  const cursorPosition = [cursorPointStart, cursorPointEnd];

  return cursorPosition;
};

const uploadStateInit = { process: 0, error: '' };

function MarkDownEditor({ input, setInput }: IPostInputProps): ReactElement {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [uploadState, setUploadState] = useState<IUploadState>(uploadStateInit);
  const infoOfCursorToGo = useRef<[boolean, number[]]>([false, [0, 0]]);
  const [cursorPosition, setCursorPosition] = useState([0, 0]);
  const inputAreaElem = useRef<HTMLTextAreaElement>(null);
  const isUploading = useRef(false);

  isUploading.current = uploadState.process !== 0;
  useEffect(() => {
    if (!isUploading.current) return;
    const currentCursor = cursorPosition[0];
    const inputInsertedUploading = `${input.slice(0, currentCursor)}![Loading...]()${input.slice(currentCursor)}`;
    setInput(inputInsertedUploading);
  }, [isUploading.current]);

  const propsAboutTextComponent = {
    input,
    setInput,
    cursorPosition,
    setCursorPosition,
    findCursorPoint,
    inputAreaElem,
    infoOfCursorToGo,
    setImageUrl,
    setUploadState,
  };

  const controlInputAndCursor = useCallback(
    (event) => {
      const cursorPositionToGo = editInputText({ event, input, setInput, cursorPosition });
      infoOfCursorToGo.current = [true, cursorPositionToGo];
      inputAreaElem.current?.focus();
    },
    [input, cursorPosition],
  );

  const insertImageMarkdown = useCallback(() => {
    const isNotVaildUrl = imageUrl === null || imageUrl === undefined || imageUrl.length === 0;
    if (isNotVaildUrl) return;
    const inputWithNewImg = `${input.slice(0, cursorPosition[0])}![](${imageUrl})${input.slice(cursorPosition[0])}`;
    setInput(inputWithNewImg);
    setImageUrl('');
  }, [imageUrl]);

  const moveCursorAfterEdit = useCallback(() => {
    const didClickedEditButton = infoOfCursorToGo.current[0];
    if (!didClickedEditButton) return;
    const cursorPositionToGo = infoOfCursorToGo.current[1];
    const [startPosition, endPosition] = cursorPositionToGo as number[];

    inputAreaElem.current?.focus();
    inputAreaElem.current?.setSelectionRange(startPosition, endPosition);
    infoOfCursorToGo.current = [false, [0, 0]];
    setCursorPosition(findCursorPoint(inputAreaElem.current as HTMLTextAreaElement));
  }, [input]);

  useEffect(() => {
    moveCursorAfterEdit();
  }, [input]);

  useEffect(() => {
    insertImageMarkdown();
  }, [imageUrl]);

  return (
    <EditorAreaWrapper process={isUploading.current ? uploadState.process : 0}>
      <hr className="processBar" />
      <PostTitleInput />
      <hr />
      <EditorTagArea />
      <EditButtonBox
        onClick={(event) => controlInputAndCursor(event)}
        tableProps={{ input, setInput, cursorPosition }}
        setImageUrl={setImageUrl}
        setUploadState={setUploadState}
      />
      <WritingArea className="textInput" propsAboutTextComponent={propsAboutTextComponent} />
    </EditorAreaWrapper>
  );
}

export default MarkDownEditor;
