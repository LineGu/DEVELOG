import React, { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import PageNav from '@molecules/PageNav/PageNav';
import Theme from '@theme/index';
import { ThemeContext } from '@theme/themeProvider';
import ThemeButton from '@molecules/ThemeBtn/index';
import BlogMarkLink from '../BlogMarkLink/index';

type HeaderProps = {
  currentPage: string;
};

const StyledHeaderSection = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15%;
  background-color: ${() => Theme.HEADER_BACK};
  border-bottom: 1px solid ${() => Theme.BASE};
  @media (max-width: ${() => Theme.PC}) {
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
  @media (max-width: ${() => Theme.PC}) {
    justify-content: center;
  }
  & > span {
    margin-left: 3%;
    margin-bottom: 1%;
  }
  &>span: hover {
    cursor: pointer;
  }
`;

function Header({ currentPage }: HeaderProps): ReactElement {
  const { changeMode } = useContext(ThemeContext);

  return (
    <>
      <StyledHeaderSection>
        <StyledHeaderBaseLine>
          <BlogMarkLink />
          <PageNav currentPage={currentPage} />
        </StyledHeaderBaseLine>
      </StyledHeaderSection>
      <ThemeButton onClick={changeMode} />
    </>
  );
}

export default Header;
