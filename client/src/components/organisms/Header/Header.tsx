import React, { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import PageNav from 'src/components/molecules/PageNav/PageNav';
import Theme from '@theme/index';
import { ThemeContext } from '@theme/themeProvider';
import ThemeButton from '@molecules/ThemeBtn/index';
import BlogMarkLink from '../BlogMarkLink/index';

interface IHeaderProps {
  currentPage: string;
}

const StyledHeaderSection = styled.header`
  display: flex;
  z-index: 3;
  justify-content: center;
  width: 100%;
  height: 15%;
  background-color: ${() => Theme.HEADER_BACK};
  border-bottom: 0px solid ${() => Theme.BASE};
  @media (max-width: ${() => Theme.PC}) {
    height: 10%;
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
  &>span: hover {
    cursor: pointer;
  }
`;

function Header({ currentPage }: IHeaderProps): ReactElement {
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
