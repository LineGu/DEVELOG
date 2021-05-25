import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import useDependencyTheme from '@hook/useDependencyTheme';
import Theme from '@theme/index';
import ThemeButton from '@molecules/ThemeBtn/index';
import MarkdownPreview from '@molecules/MarkdownPreview/index';
import MarkDownEditor from '@organisms/MarkdownEditor/index';
import EditorButtons from '@molecules/EditorButtons';
import MESSAGE from '@construction/message';

const StyledPostBox = styled.div`
  display: flex;
  position: relative;
  word-wrap: break-word;
  white-space: pre-wrap;
  pointer-events: none;

  @media (max-width: ${() => Theme.MOBILE}) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 690px) and (min-height: 1000px) {
    display: none;
  }
`;

const StyledThemeButton = styled(ThemeButton)`
  pointer-events: auto;
  bottom: 1.8rem;
  @media (max-width: ${() => Theme.MOBILE}) {
    bottom: 1rem;
    left: 0.3em;
  }
`;

const StyledErrorBox = styled.div`
  display: none;
  @media (max-width: 690px) and (min-height: 1000px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 35%;
  }
`;

function PostEditor(): ReactElement {
  const [input, setInput] = useState<string>('');
  const { changeMode } = useDependencyTheme();

  return (
    <>
      <StyledErrorBox className="error">{MESSAGE.DISPLAY_ERROR}</StyledErrorBox>
      <StyledPostBox>
        <MarkDownEditor input={input} setInput={setInput} />
        <MarkdownPreview input={input} />
        <StyledThemeButton onClick={changeMode} />
        <EditorButtons />
      </StyledPostBox>
    </>
  );
}

export default PostEditor;
