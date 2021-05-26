import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import { IEditorProps } from '@interfaces';
import getImgByDrag from '@utils/getImgByDrag';
import TextInput from '@atoms/TextInput';
import { IOnDragEventFunc } from '@eventInterfaces';
import MESSAGE from '@construction/message';
import { Editors } from '@utils/markdownEditor/index';

const StyledMarkdownArea = styled(TextInput)`
  width: 93%;
  height: 64vh;
  padding-left: 3vw;
  background-color: ${() => Theme.HEADER_BACK};
  color: ${() => Theme.INTRO};
  font-size: 1.5rem;
  @media (max-width: ${() => Theme.TABLET}) {
    width: 100%;
    border: none;
  }

  &::selection {
    background-color: ${() => Theme.TEXT_SELECT};
  }
  @media (max-width: ${() => Theme.MOBILE}) {
    width: 91%;
    height: 65vh;
    padding: 1.2em 0 0 1.2em;
    font-size: 1rem;
  }
`;

function EditorWritingArea({ editButtonProps: props, className }: IEditorProps): ReactElement {
  const { input, setInput, inputAreaElem, setUploadState } = props;
  const imgEditor = Editors.img;
  const { uploadImg } = Editors.img;

  const uploadImgByDrag: IOnDragEventFunc = async (event) => {
    const imgFile = getImgByDrag(event);
    const timer = setInterval(() => {
      setUploadState(imgEditor.uploadingState);
    }, 10);
    await uploadImg(imgFile);
    // updateByEditButton();
    setUploadState(imgEditor.uploadingState);
    clearInterval(timer);
  };

  return (
    <StyledMarkdownArea
      className={className}
      placeholder={MESSAGE.POST_PLACEHOLDER}
      state={input}
      setState={setInput}
      refElem={inputAreaElem}
      onDrop={uploadImgByDrag}
    />
  );
}

export default EditorWritingArea;
