import React, { ReactElement } from 'react';
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
`;

function PostTitleInput(): ReactElement {
  return <TextAreaForTitle placeholder={message.TITLE_PLACEHOLDER} />;
}

export default PostTitleInput;
