import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import { IEditComponentProps, IOnDragEventFunc } from '@types';
import TextInput from '@components/common/TextInput';
import MESSAGE from '@constants/message';
import { Editors } from 'src/markdownController/ToolBarEditors/index';

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

function TextArea({ editButtonProps: props, className }: IEditComponentProps): ReactElement {
  const { input, setInput, inputAreaElem, setUploadState } = props;
  const imgEditor = Editors.img;
  const { uploadImg } = Editors.img;

  const getImgByDrag = useCallback((event: React.DragEvent<HTMLElement>): File => {
    event.stopPropagation();
    event.preventDefault();
    const { files } = event.dataTransfer;
    const { 0: imgFile } = files;
    return imgFile;
  }, []);

  const uploadImgByDrag: IOnDragEventFunc = useCallback(async (event) => {
    const imgFile = getImgByDrag(event);
    const timer = setInterval(() => {
      setUploadState(imgEditor.uploadingState);
    }, 10);
    await uploadImg(imgFile);
    setUploadState(imgEditor.uploadingState);
    clearInterval(timer);
  }, []);

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

export default TextArea;
