import React, { ReactElement } from 'react';
import styled from 'styled-components';
import GuideBox from '@components/about/GuideBox';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
  width: 100%;
  height: 70%;
`;

function BodyContainer(): ReactElement {
  return (
    <StyledContainer>
      <GuideBox />
    </StyledContainer>
  );
}

export default BodyContainer;
