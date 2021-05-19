import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import TextInput from '@atoms/TextInput/index';
import Theme from '@theme/index';
import message from '@message';

const TextAreaForTitle = styled(TextInput)`
  width: 100%;
  font-size: 3.5em;
  font-weight: 700;
  padding: 5vh 0 0 3vw;

  background-color: ${() => Theme.HEADER_BACK};
  color: ${() => Theme.INTRO};
  &::placeholder {
    color: #a2acb4;
  }

  @media (max-width: ${() => Theme.MOBILE}) {
    width: 95%;
    font-size: 1.8em;
    font-weight: 700;
    height: 2em;
    padding: 0.6em 0 0 0.6em;
  }
`;

function PostTitleInput(): ReactElement {
  const [title, setTitle] = useState<string>('');
  return <TextAreaForTitle placeholder={message.TITLE_PLACEHOLDER} state={title} setState={setTitle} />;
}

export default PostTitleInput;
