import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import PageBase from '@components/common/PageBase/PageBase';
import ThemeButton from '@components/common/ThemeBtn/index';
import MarkdownPreview from '@components/post/Preview/index';
import MarkDownEditor from '@components/post/EditBoard/index';
import PostButtons from '@components/post/PostButtons';
import useDependencyTheme from '@hooks/useDependencyTheme';
import Theme from '@constants/Theme';
import MESSAGE from '@constants/message';
import { IPagePorps } from '@types';

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
  left: 2rem;
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

const StyledPreview = styled(MarkdownPreview)`
  & > * {
    overflow-y: scroll;
    padding: 10vh 6vw;
  }
`;

function PostPage({ mode }: IPagePorps): ReactElement {
  const [input, setInput] = useState<string>('');
  const { changeMode } = useDependencyTheme();

  return (
    <PageBase mode={mode} title="Develog">
      <StyledErrorBox className="error">{MESSAGE.DISPLAY_ERROR}</StyledErrorBox>
      <StyledPostBox>
        <MarkDownEditor input={input} setInput={setInput} />
        <StyledPreview input={input} />
        <StyledThemeButton onClick={changeMode} />
        <PostButtons />
      </StyledPostBox>
    </PageBase>
  );
}

export default PostPage;
