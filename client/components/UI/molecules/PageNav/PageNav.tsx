import React, { ReactElement, useState, useCallback } from 'react';
import styled from 'styled-components';
import pageLinkList from '@utils/pageLinkList';
import LinkButton from '@atoms/LinkButton/index';
import Theme from '@theme/index';
import ResponsiveMenu from './ResponsiveMenu';

const StyledPageNav = styled.nav`
  display: flex;
  font-size: 22px;
  font-weight: 500;
  color: ${() => Theme.BASE};

  margin-right: 1vw;
  margin-bottom: 3%;

  & > div {
    margin-left: 20px;
  }
  @media (max-width: ${() => Theme.PC}) {
    display: none;
  }
`;

const ResponsiveControlBox = styled.div`
  .mobile {
    display: block;
    position: absolute;
    flex-direction: column;
    right: calc(7.6vw - 26px);
    top: 99%;

    animation-name: left;
    animation-duration: 0.8s;
    animation-iteration-count: initial;
    animation-delay: 0s;
    animation-timing-function: ease-out;

    & > div {
      text-align: center;
      padding: 9px;
      margin: 10px calc(10px - 1.2vw) 0 0;
      background-color: ${() => Theme.LINK_MODAL};
      text-decoration: none;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
      font-size: 1.7vh;
    }
  }
`;

type TabNavProps = {
  currentPage: string;
};

function PageNav({ currentPage }: TabNavProps): ReactElement {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const onClickMenu = useCallback(() => {
    setIsMobile(!isMobile);
  }, [isMobile]);

  return (
    <>
      <ResponsiveMenu onClick={onClickMenu} />
      <ResponsiveControlBox>
        <StyledPageNav className={isMobile ? 'mobile' : ''}>
          {pageLinkList.map((linkName: string, index: number) => (
            <LinkButton linkName={linkName} currentPage={currentPage} key={index} />
          ))}
        </StyledPageNav>
      </ResponsiveControlBox>
    </>
  );
}

export default PageNav;
