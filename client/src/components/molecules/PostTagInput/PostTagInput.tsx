import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import message from '@construction/message';
import TextInput from '@atoms/TextInput/index';
import { SetStateString, ChangeEvent } from '@types';
import { IOnKeyboardFunc } from '@eventInterfaces';

interface IPostTagInputProps {
  addTag: IOnKeyboardFunc;
  setModalState: SetStateString;
  setTagInput: SetStateString;
  tagInput: string;
}

const TextAreaForTag = styled(TextInput)`
  border: none;
  outline: none;
  resize: none;
  pointer-events: auto;
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

  @media (max-width: ${() => Theme.MOBILE}) {
    font-size: 1em;
    margin-left: 1em;
    height: 1.5em;
  }
`;

const renderTagChanged = (event: ChangeEvent, setTagInput: SetStateString): void => {
  if (!event) return;
  const newTag = event.target.value;
  const isValidTagForm = newTag[0] === '#' || newTag.length === 0;
  if (isValidTagForm) setTagInput(newTag);
};

function PostTagInput({ addTag, setModalState, setTagInput, tagInput }: IPostTagInputProps): ReactElement {
  return (
    <TextAreaForTag
      placeholder={message.TAG_PLACEHOLDER}
      onFocus={() => setModalState('show')}
      onBlur={() => setModalState('hidden')}
      state={tagInput}
      setState={setTagInput}
      onChange={(event) => renderTagChanged(event, setTagInput)}
      onKeyDown={addTag}
    />
  );
}

export default PostTagInput;
