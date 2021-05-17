import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import DescriptiveModal from '@atoms/DescriptiveModal/index';
import PostTagInput from '@molecules/PostTagInput/index';
import message from '@message';
import { IOnKeyboardFunc } from '@eventInterfaces';

const StyledTagContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: space-beetween;
  margin: 1.2rem 0 0.4rem 2.5vw;
  @media (max-width: ${() => Theme.MOBILE}) {
    margin: 0 0 1em 0;
    width: 100%;
  }
`;

const StyledTagUnit = styled.div`
  height: 1.7rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 3rem 0.7rem 0.5rem;
  color: ${() => Theme.MODE_MARK};
  pointer-events: auto;
  &:hover {
    opacity: 60%;
    cursor: pointer;
  }
  @media (max-width: ${() => Theme.MOBILE}) {
    font-size: 0.7em;
    margin: 0 0.4em 0.3rem 1rem;
  }
`;

function EditorTagArea(): ReactElement {
  const [tagInput, setTagInput] = useState<string>('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [modalState, setModalState] = useState<string>('hidden');

  const addTag: IOnKeyboardFunc = (event) => {
    const isNotValidTag = !event || event.currentTarget.value.length < 2;
    if (isNotValidTag) return;
    const isRequestToAdd = event.key === ' ' || event.key === 'Enter';
    if (isRequestToAdd) {
      const tagListCopied: string[] = [...tagList];
      tagListCopied.push(tagInput.slice(1));
      setTagList(tagListCopied);
      setModalState('hidden');
      setTagInput('');
    }
  };

  const deleteTagUnit = (index: number) => {
    const tagIndex = index;
    const tagListCopied: string[] = [...tagList];
    tagListCopied.splice(tagIndex, 1);
    setTagList(tagListCopied);
  };

  return (
    <StyledTagContainer>
      {tagList.map((tag, index) => (
        <StyledTagUnit key={index} onClick={() => deleteTagUnit(index)}>
          {tag}
        </StyledTagUnit>
      ))}
      <PostTagInput addTag={addTag} setModalState={setModalState} setTagInput={setTagInput} tagInput={tagInput} />
      <DescriptiveModal className={`tagModal ${modalState}`} visibleState={modalState}>
        {message.DESCRIPTION_TAG}
      </DescriptiveModal>
    </StyledTagContainer>
  );
}

export default EditorTagArea;
