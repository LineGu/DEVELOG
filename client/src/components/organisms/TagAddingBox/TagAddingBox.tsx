import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import DescriptiveModal from '@molecules/DescriptiveModal/index';
import TagAreaToAdd from '@molecules/TagAreaToAdd/index';
import message from '@message';

const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-beetween;
  margin: 1.2rem 0 1.2rem 2.5vw;
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
`;

function TagAddingBox(): ReactElement {
  const [tagInput, setTagInput] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [modalState, setModalState] = useState('hidden');

  const propsForTagArea = { tagInput, setTagInput, tagList, setTagList, setModalState };

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
      <TagAreaToAdd propsForTagArea={propsForTagArea} />
      <DescriptiveModal className={`tagModal ${modalState}`} state={modalState}>
        {message.DESCRIPTION_TAG}
      </DescriptiveModal>
    </StyledTagContainer>
  );
}

export default TagAddingBox;
