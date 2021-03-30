import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Tab from '../../atoms/Tag/index';
import ResponsiveMenu from './ResponsiveMenu';

export const StyledTabNav = styled.nav`
  postion: absolute;
  display: flex;
  font-size: 22px;
  font-weight: 500;
  color: #707070;
  margin-left: 22.5%;
  margin-top: 8%;

  @media (max-width: 600px) {
    display: none;
  }
`;

const tagList: string[] = ['ABOUT', 'PORTFOLIO', 'BLOG', 'CONTACT', 'LOGIN'];

type Props = {
  currentTag: string;
};

function TabNav({ currentTag }: Props): ReactElement {
  return (
    <>
      <StyledTabNav>
        {tagList.map((tag: string, index: number) => (
          <Tab tagName={tag} currentTag={currentTag} key={index} />
        ))}
      </StyledTabNav>
      <ResponsiveMenu />
    </>
  );
}

export default TabNav;
