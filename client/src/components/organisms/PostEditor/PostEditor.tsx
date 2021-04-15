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
  bottom: 7vh;
`;

const StyledButtonBox = styled.div`
  position: absolute;
  right: 42%;
  bottom: 2rem;
  .save {
  }
  .submit {
    background-color: ${() => Theme.SUBMIT_BTN};
  }
`;

const StyledButton = styled(Button)`
  pointer-events: auto;
  margin-right: 0.8em;
  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;

function PostEditor(): ReactElement {
  const [input, setInput] = useState('');
  const { changeMode } = useDependencyTheme();

  return (
    <StyledPostBox>
      <MarkDownEditor input={input} setInput={setInput} />
      <MarkdownPreview input={input} />
      <StyledThemeButton onClick={changeMode} />
      <StyledButtonBox>
        <StyledButton onClick={() => console.log('임시저장')} className="save">
          임시저장
        </StyledButton>
        <StyledButton onClick={() => console.log('등록')} className="submit">
          등록
        </StyledButton>
      </StyledButtonBox>
    </StyledPostBox>
  );
}

export default PostEditor;
