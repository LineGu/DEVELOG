import React, { ReactElement, useCallback, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import WritingArea from '@organisms/Editor/WritingArea/index';
import PostTitleInput from '@molecules/PostTitleInput/index';
import EditorTagArea from '@organisms/Editor/TagArea/index';
import EditButtonBox from '@organisms/Editor/ButtonBox/index';
import editInputText from '@utils/editInputText';
import { IPostInputProps, IEditFuncProps } from '@interfaces';
import ProcessBar from '@molecules/ProcessBar';
import useCursorPoint from '@hook/useCursorPoint';
import Devider from '@atoms/Devider';
import useUloadingImg from '@hook/useUploadingImg';
import { IOnClickSvgFunc } from '@eventInterfaces';
import editByButton from '@utils/markdownEditor/index';

const EditorAreaWrapper = styled.div`
  width: 50%;
  height: 100vh;

  @media (max-width: ${() => Theme.MOBILE}) {
    width: 100%;
  }
`;

const StyeldDevider = styled(Devider)`
  top: 13vh;
  left: 3vw;
  @media (max-width: ${() => Theme.MOBILE}) {
    top: 2.7em;
    left: 0.8em;
  }
`;

function MarkDownEditor(MarkDownProps: IPostInputProps): ReactElement {
  const { input, setInput } = MarkDownProps;
  const inputAreaElem = useRef<HTMLTextAreaElement>(null);
  const { cursorPosition, moveCursor } = useCursorPoint(inputAreaElem.current);
  const [cursorToGoByEditButton, setCursorToGo] = useState(cursorPosition); // 반성하세요
  const { setImageUrl, setUploadState, uploadState } = useUloadingImg(input, cursorPosition, setInput, setCursorToGo);
  useEffect(() => {
    moveCursor(cursorToGoByEditButton);
  }, [cursorToGoByEditButton]);

  const textInputProps = { ...MarkDownProps, inputAreaElem, setImageUrl, setUploadState };

  const updateByEditButton: IEditFuncProps = useCallback(
    (event, tableCount = [0, 0]) => {
      const { updatedText, cursorToGo } = editByButton({ input, event, cursorPosition, tableCount }); // 새로운 포인터의 위치와 로직 분리
      setInput(updatedText);
      inputAreaElem.current?.focus();
      setCursorToGo(cursorToGo);
    },
    [input, cursorPosition],
  );

  return (
    <EditorAreaWrapper>
      <ProcessBar uploadState={uploadState} />
      <PostTitleInput />
      <StyeldDevider />
      <EditorTagArea />
      <EditButtonBox
        onClick={updateByEditButton}
        tableProps={{ input, setInput, cursorPosition }}
        setImageUrl={setImageUrl}
        setUploadState={setUploadState}
      />
      <WritingArea className="textInput" writingAreaProps={textInputProps} />
    </EditorAreaWrapper>
  );
}

export default MarkDownEditor;
