import React, { ReactElement } from 'react';
import styled from 'styled-components';
import BlogMark from '../../atoms/BlogMark/index';
import TabNav from '../../molecules/TabNav/index';

const StyledHeaderSection = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15%;
  background-color: #f1efff;
  border-bottom: 1px solid #878282;
  @media (max-width: 960px) {
    height: 10%;
  }
`;

const StyledHeaderBaseLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  width: calc(15.1515vw + 848.4848px);
  height: 100%;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

type Props = {
  currentTag: string;
};

function Header({ currentTag }: Props): ReactElement {
  return (
    <StyledHeaderSection>
      <StyledHeaderBaseLine>
        <BlogMark />
        <TabNav currentTag={currentTag} />
      </StyledHeaderBaseLine>
    </StyledHeaderSection>
  );
}

export default Header;
