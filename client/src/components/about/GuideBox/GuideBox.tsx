import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PostButton from '@components/common/PostButton';

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 70vh;
`;

function GuideBox(): ReactElement {
  return (
    <StyledBox>
      <PostButton>소개글 작성하기</PostButton>
    </StyledBox>
  );
}

export default GuideBox;
