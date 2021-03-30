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
`;

const TabNavBox = styled.div`
  .mobile {
    display: block;
    position: absolute;
    flex-direction: column;
    right: calc(7.6vw - 26px);
    top: 94%;
    background-color: #d0d0d0;
    border-radius: 0.4em;
    padding: 1%;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);

    &:after {
      border-top: 0px solid #f1efff;
      border-left: 7px solid #f1efff;
      border-right: 7px solid #f1efff;
      border-bottom: 10px solid #d0d0d0;
      content: '';
      position: absolute;
      top: -10px;
      left: 79%;
    }

    & > div {
      border-bottom: 1px solid #878282;
      font-size: 1.1rem;
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
