import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import useDependencyTheme from '@hook/useDependencyTheme';
import Theme from '@theme/index';
import ThemeButton from '@molecules/ThemeBtn/index';
import Button from '@atoms/Button/index';
import MarkdownPreview from '@molecules/MarkdownPreview/index';
import MarkDownEditor from '@organisms/MarkdownEditor/index';

const StyledPostBox = styled.div`
  display: flex;
  position: relative;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal;
  pointer-events: none;
  @media (max-width: ${() => Theme.MOBILE}) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 690px) and (min-height: 1000px) {
    display: none;
  }

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
`;

const StyledThemeButton = styled(ThemeButton)`
  pointer-events: auto;
  bottom: 2.7rem;
  @media (max-width: ${() => Theme.MOBILE}) {
    bottom: 1rem;
    left: 0.3em;
  }
`;

const StyledButtonBox = styled.div`
  position: absolute;
  right: 50%;
  bottom: 1rem;
  @media (max-width: ${() => Theme.PC}) {
    right: 0;
  }
  @media (max-width: ${() => Theme.MOBILE}) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 3.7em;
    bottom: 0;
    background-color: ${() => Theme.PREVIEW_BACK};
  }

  .back {
    background-color: ${() => Theme.LINK_MODAL};
  }
  .save {
    background-color: ${() => Theme.LINK_MODAL};
  }
  .submit {
    background-color: ${() => Theme.POINT};
  }
`;

const StyledButton = styled(Button)`
  pointer-events: auto;
  margin-right: 0.8em;
  width: 7rem;
  height: 3rem;
  font-size: 1.125rem;
  &:hover {
    opacity: 70%;
    cursor: pointer;
  }
  @media (max-width: ${() => Theme.MOBILE}) {
    width: 5rem;
    height: 2rem;
    font-size: 1rem;
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
  const [input, setInput] = useState('');
  const { changeMode } = useDependencyTheme();

  return (
    <>
      <StyledErrorBox className="error">현재 디스플레이는 너무 작아요ㅠㅠㅠ</StyledErrorBox>
      <StyledPostBox>
        <MarkDownEditor input={input} setInput={setInput} />
        <MarkdownPreview input={input} />
        <StyledThemeButton onClick={changeMode} />
        <StyledButtonBox>
          <StyledButton onClick={() => console.log('나가기')} className="back">
            나가기
          </StyledButton>
          <StyledButton onClick={() => console.log('임시저장')} className="save">
            임시저장
          </StyledButton>
          <StyledButton onClick={() => console.log('등록')} className="submit">
            등록
          </StyledButton>
        </StyledButtonBox>
      </StyledPostBox>
    </>
  );
}

export default PostEditor;
