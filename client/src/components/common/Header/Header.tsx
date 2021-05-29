import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import PageNav from '@components/common/PageNav';
import BlogMarkLink from '@components/common/BlogMarkLink';
import useDependencyTheme from '@hooks/useDependencyTheme';
import { ILinkPageProps } from '@types';

const StyledHeaderSection = styled.header`
  display: flex;
  z-index: 3;
  justify-content: center;
  width: 100%;
  height: 15%;
  background-color: ${() => Theme.HEADER_BACK};
  border-bottom: 0px solid ${() => Theme.BASE};
  @media (max-width: ${() => Theme.PC}) {
    position: absolute;
    height: 10%;
    top: 3vh;
  }
`;

const StyledHeaderBaseLine = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-end;
  width: calc(15.1515vw + 848.4848px);
  height: 100%;
  @media (max-width: ${() => Theme.PC}) {
    justify-content: center;
  }
  & > span {
    margin-left: 3%;
    margin-bottom: 1%;
  }
  & > span:hover {
    cursor: pointer;
  }
`;

function Header({ currentPage }: ILinkPageProps): ReactElement {
  useDependencyTheme();

  return (
    <StyledHeaderSection>
      <StyledHeaderBaseLine>
        <BlogMarkLink />
        <PageNav currentPage={currentPage} />
      </StyledHeaderBaseLine>
    </StyledHeaderSection>
  );
}

export default Header;
