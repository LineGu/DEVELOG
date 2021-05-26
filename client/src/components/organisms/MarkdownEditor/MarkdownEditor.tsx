import React, { ReactElement, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import WritingArea from '@organisms/Editor/WritingArea/index';
import PostTitleInput from '@molecules/PostTitleInput/index';
import EditorTagArea from '@organisms/Editor/TagArea/index';
import EditButtonBox from '@organisms/Editor/ButtonBox/index';
import { IPostInputProps, IUploadState } from '@interfaces';
import ProcessBar from '@molecules/ProcessBar';
import useCursorPoint from '@hook/useCursorPoint';
import Devider from '@atoms/Devider';

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
  const inputAreaElem = useRef<HTMLTextAreaElement>(null);
  const { cursorPosition, moveCursor } = useCursorPoint(inputAreaElem.current);
  const initUploadImgState = { progress: 0, error: '' };
  const [uploadState, setUploadState] = useState<IUploadState>(initUploadImgState);

  useEffect(() => {
    moveCursor(cursorPosition);
  }, [cursorPosition]);

  const editButtonProps = { ...MarkDownProps, inputAreaElem, setUploadState, moveCursor, cursorPosition };

  return (
    <EditorAreaWrapper>
      <ProcessBar uploadState={uploadState} />
      <PostTitleInput />
      <StyeldDevider />
      <EditorTagArea />
      <EditButtonBox editButtonProps={editButtonProps} />
      <WritingArea className="textInput" editButtonProps={editButtonProps} />
    </EditorAreaWrapper>
  );
}

export default MarkDownEditor;
