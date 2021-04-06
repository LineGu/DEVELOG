import React, { ReactElement, useState, useCallback } from 'react';
import styled from 'styled-components';
import pageLinkList from '@utils/pageLinkList';
import LinkButton from '@atoms/LinkButton/index';
import Theme from '@theme/index';
import ResponsiveMenu from './ResponsiveMenu';

interface ITabNavProps {
  currentPage: string;
}

const StyledPageNav = styled.nav`
  display: flex;
  margin-right: 1vw;
  margin-bottom: 3%;
  color: ${() => Theme.BASE};
  font-size: 20px;
  font-weight: 400;

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
    top: 99%;
    right: calc(7.6vw - 26px);

    animation-name: left;
    animation-duration: 0.8s;
    animation-iteration-count: initial;
    animation-delay: 0s;
    animation-timing-function: ease-out;

    & > div {
      background-color: ${() => Theme.LINK_MODAL};
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
      margin: 10px calc(10px - 1.2vw) 0 0;
      padding: 9px;
      opacity: 100%;
      text-align: center;
      text-decoration: none;
      font-size: 1.7vh;
    }
    & > div:hover {
      color: ${() => Theme.HOVER_POINT};
    }
  }
`;

function PageNav({ currentPage }: ITabNavProps): ReactElement {
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
