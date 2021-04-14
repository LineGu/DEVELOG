import React, { ReactElement, SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';

interface ITagAreaProps {
  propsForTagArea: {
    tagInput: string;
    setTagInput: Dispatch<SetStateAction<string>>;
    tagList: string[];
    setTagList: Dispatch<SetStateAction<string[]>>;
    setModalState: Dispatch<SetStateAction<string>>;
  };
}

const TextAreaForTag = styled.input`
  font-size: 1.5em;
  font-weight: 400;
  border: none;
  outline: none;
  resize: none;
  margin-left: 0.4rem;
  padding-bottom: 0.7rem;
  pointer-events: auto;
  background-color: ${() => Theme.HEADER_BACK};
  color: ${() => Theme.INTRO};
  &::placeholder {
    color: #a2acb4;
  }
  &::selection {
    background-color: #dfdfdf;
    color: #a2acb4;
  }
`;

function TagAreaToAdd({ propsForTagArea }: ITagAreaProps): ReactElement {
  const { tagInput, setTagInput, tagList, setTagList, setModalState } = propsForTagArea;
  return (
    <TextAreaForTag
      placeholder="태그를 추가하세요"
      spellCheck="false"
      value={tagInput}
      onFocus={() => setModalState('show')}
      onBlur={() => setModalState('hidden')}
      onChange={(event) => {
        const newTag = event.target.value;
        if (newTag[0] === '#' || newTag.length === 0) setTagInput(newTag);
      }}
      onKeyDown={(event) => {
        if (event.currentTarget.value.length < 2) return;
        if ((event.key === ' ' || event.key === 'Enter') && tagInput[0] === '#') {
          const tagListCopied: string[] = [...tagList];
          tagListCopied.push(tagInput.slice(1));
          setTagList(tagListCopied);
          setTagInput('');
          setModalState('hidden');
        }
      }}
    />
  );
}

export default TagAreaToAdd;
