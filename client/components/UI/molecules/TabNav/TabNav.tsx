import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Tab from '../../atoms/Tag/index';

export const StyledTagListBox = styled.nav`
  display: flex;
  width: 26.7%;
  font-size: 22px;
  font-weight: 500;
  color: #707070;
  margin-left: 22.5%;
  margin-top: 8%;
`;

const tagList: string[] = ['ABOUT', 'PORTFOLIO', 'BLOG', 'CONTACT', 'LOGIN'];

type Props = {
  currentTag: string;
};

function TagList({ currentTag }: Props): ReactElement {
  return (
    <StyledTagListBox>
      {tagList.map((tag: string, index: number) => (
        <Tab tagName={tag} currentTag={currentTag} key={index} />
      ))}
    </StyledTagListBox>
  );
}

export default TagList;
