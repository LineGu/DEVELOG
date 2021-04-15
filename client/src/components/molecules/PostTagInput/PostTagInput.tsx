import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import TextInput from '@atoms/TextInput/index';
import message from '@construction/message';
import { SetStateString, ChangeEvent } from '@types';
import { IOnKeyboardFunc } from '@eventInterfaces';

interface IPostTagInputProps {
  addTag: IOnKeyboardFunc;
  setModalState: SetStateString;
}

const TextAreaForTag = styled(TextInput)`
  font-size: 1.5em;
  font-weight: 400;
  margin-left: 0.4rem;

  background-color: ${() => Theme.HEADER_BACK};
  color: ${() => Theme.INTRO};
  &::placeholder {
    color: ${() => Theme.TAG_PLACEHOLDER};
  }
  &::selection {
    background-color: inherit;
    color: ${() => Theme.TAG_PLACEHOLDER};
  }
`;

const renderTagChanged = (event: ChangeEvent, setTagInput: SetStateString): void => {
  if (!event) return;
  const newTag = event.target.value;
  const isValidTagForm = newTag[0] === '#' || newTag.length === 0;
  if (isValidTagForm) setTagInput(newTag);
};

function PostTagInput({ addTag, setModalState }: IPostTagInputProps): ReactElement {
  return (
    <TextAreaForTag
      placeholder={message.TAG_PLACEHOLDER}
      onFocus={() => setModalState('show')}
      onBlur={() => setModalState('hidden')}
      onChange={renderTagChanged}
      onKeyDown={addTag}
    />
  );
}

export default PostTagInput;
