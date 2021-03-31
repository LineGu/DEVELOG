import React, { ReactElement } from 'react';
import styled from 'styled-components';
import BlogMark from '@atoms/BlogMark/index';
import PageNav from '@molecules/PageNav/PageNav';

type Props = {
  currentPage: string;
};

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
  & > span {
    margin-left: 3%;
    margin-bottom: 1%;
  }
`;

function Header({ currentPage }: Props): ReactElement {
  return (
    <StyledHeaderSection>
      <StyledHeaderBaseLine>
        <BlogMark />
        <PageNav currentPage={currentPage} />
      </StyledHeaderBaseLine>
    </StyledHeaderSection>
  );
}

export default Header;
