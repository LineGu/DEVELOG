import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';

const TextAreaForTitle = styled.textarea`
  width: 100%;
  height: auto;
  font-size: 3.5em;
  font-weight: 700;
  padding: 5vh 0 0 3vw;
  border: none;
  outline: none;
  resize: none;
  pointer-events: auto;
  background-color: ${() => Theme.HEADER_BACK};
  color: ${() => Theme.INTRO};
  &::placeholder {
    color: #a2acb4;
  }
`;

function PostTitleInput(): ReactElement {
  const [title, setTitle] = useState('');

  return (
    <TextAreaForTitle
      placeholder="제목을 입력하세요"
      value={title}
      onChange={(event) => setTitle(event.target.value)}
      spellCheck="false"
    />
  );
}

export default PostTitleInput;
