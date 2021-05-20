import React, { ReactElement, useState, useRef } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import Modal from '@atoms/Modal/index';
import PostTagInput from '@molecules/PostTagInput/index';
import MESSAGE from '@message';
import STATE from '@construction/state';
import KEYBOARD from '@construction/keyboard';
import { IOnKeyboardFunc } from '@eventInterfaces';
import clearInput from '@utils/clearInput';

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
  margin: 0 3rem 0.7rem 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${() => Theme.MODE_MARK};
  pointer-events: auto;
  &:hover {
    opacity: 60%;
    cursor: pointer;
  }
  @media (max-width: ${() => Theme.MOBILE}) {
    margin: 0 0.4em 0.3rem 1rem;
    font-size: 0.7em;
  }
`;

const StyledTagModal = styled(Modal)`
  width: 400px;
  z-index: 2;
  padding: 15px 20px;
  line-height: 1.5em;
  bottom: -4em;
  background-color: ${() => Theme.EMPHASIS};
  color: ${() => Theme.HEADER_BACK};
  @media (max-width: ${() => Theme.MOBILE}) {
    height: 4.7em;
    width: 60vw;
    padding: 0.5em 0.8em;
    margin-left: 1.7em;
    bottom: -5.3em;
    font-size: 0.43em;
  }
`;

function EditorTagArea(): ReactElement {
  const [tagInput, setTagInput] = useState<string>('');
  const [tags, setTags] = useState<Array<[string, number]>>([]);
  const newTagKey = useRef<number>(0);
  const [modalState, toggleModalState] = useState<string>(STATE.HIDE);

  const addTag: IOnKeyboardFunc = (event) => {
    const isValidTag = event.currentTarget.value.length >= 2;
    if (!isValidTag) return;

    const keysToAdd = [KEYBOARD.SPACE, KEYBOARD.ENTER];
    const isValidKeyToAdd = keysToAdd.includes(event.key);
    if (!isValidKeyToAdd) return;

    const newTag = tagInput.slice(1);
    const updatedTags: Array<[string, number]> = [...tags, [newTag, newTagKey.current]];
    newTagKey.current += 1;

    setTags(updatedTags);
    toggleModalState(STATE.HIDE);
    clearInput(setTagInput);
  };

  const deleteTag = (tagKeyToDelete: number) => {
    const updatedTags = tags.filter(([, tagKey]) => tagKey !== tagKeyToDelete);
    setTags(updatedTags);
  };

  return (
    <StyledTagContainer>
      {tags.map(([tag, tagKey]) => (
        <StyledTagUnit key={tagKey} onClick={() => deleteTag(tagKey)}>
          {tag}
        </StyledTagUnit>
      ))}
      <PostTagInput addTag={addTag} setModalState={toggleModalState} setTagInput={setTagInput} tagInput={tagInput} />
      <StyledTagModal className={modalState} visibleState={modalState}>
        {MESSAGE.DESCRIPTION_TAG}
      </StyledTagModal>
    </StyledTagContainer>
  );
}

export default EditorTagArea;
