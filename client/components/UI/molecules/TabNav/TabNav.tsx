import React, { ReactElement, useState, useCallback } from 'react';
import styled from 'styled-components';
import Tab from '../../atoms/Tab/index';
import ResponsiveMenu from './ResponsiveMenu';

export const StyledTabNav = styled.nav`
  display: flex;
  font-size: 22px;
  font-weight: 500;
  color: #707070;

  margin-right: 1%;
  margin-bottom: 2%;

  @media (max-width: 960px) {
    display: none;
  }

  @keyframes left {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    50% {
      transform: translate3d(0, 0, 0);
    }
  }
`;

const TabNavBox = styled.div`
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
      background-color: #d0d0d0;
      text-decoration: none;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
      font-size: 1.7vh;
    }
  }
`;

const tagList: string[] = ['ABOUT', 'PORTFOLIO', 'BLOG', 'CONTACT', 'LOGIN'];

type Props = {
  currentTag: string;
};

function TabNav({ currentTag }: Props): ReactElement {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const onClickNav = useCallback(() => {
    setIsMobile(!isMobile);
  }, [isMobile]);
  return (
    <>
      <ResponsiveMenu onClick={onClickNav} />
      <TabNavBox>
        <StyledTabNav className={isMobile ? 'mobile' : ''}>
          {tagList.map((tag: string, index: number) => (
            <Tab tagName={tag} currentTag={currentTag} key={index} />
          ))}
        </StyledTabNav>
      </TabNavBox>
    </>
  );
}

export default TabNav;
