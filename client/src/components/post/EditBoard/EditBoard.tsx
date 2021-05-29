import React, { ReactElement, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import TextArea from '@components/post/TextArea';
import PostTitleInput from '@components/post/TitleArea/index';
import EditorTagArea from '@components/post/TagArea';
import EditButtonBox from '@components/post/ToolBar/ToolBar';
import { IPostInputProps, IUploadState } from '@types';
import ProcessBar from '@components/post/ProgressBar';
import useCursorPoint from '@hooks/useCursorPoint';
import Devider from '@components/common/Devider';

const EditorAreaWrapper = styled.div`
  width: 50%;
  height: 100vh;

  @media (max-width: ${() => Theme.PC}) {
    width: 100%;
  }

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

function EditBoard(MarkDownProps: IPostInputProps): ReactElement {
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
      <TextArea className="textInput" editButtonProps={editButtonProps} />
    </EditorAreaWrapper>
  );
}

export default EditBoard;
