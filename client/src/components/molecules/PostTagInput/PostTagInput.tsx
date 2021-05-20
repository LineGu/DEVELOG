import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import MESSAGE from '@construction/message';
import STATE from '@construction/state';
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

function PostTagInput({ addTag, setModalState, setTagInput, tagInput }: IPostTagInputProps): ReactElement {
  const renderTagChanged = (event: ChangeEvent): void => {
    const newTag = event.target.value;
    const isEmptyInput = newTag.length === 0;
    const isValidStart = newTag[0] === '#';

    const isValidTagForm = isValidStart || isEmptyInput;
    if (isValidTagForm) setTagInput(newTag);
  };

  return (
    <TextAreaForTag
      placeholder={MESSAGE.TAG_PLACEHOLDER}
      onFocus={() => setModalState(STATE.SHOW)}
      onBlur={() => setModalState(STATE.HIDE)}
      state={tagInput}
      setState={setTagInput}
      onChange={renderTagChanged}
      onKeyDown={addTag}
    />
  );
}

export default PostTagInput;
