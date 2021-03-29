import React, { ReactElement } from 'react';
import styled from 'styled-components';

export const StyledHeaderBox = styled.header`
  display: flex;
  width: 100%;
  height: 10.8%;
  background-color: #f1efff;
`;

export const StyledTagListBox = styled.div`
  display: flex;
  width: 26.7%;
  font-size: 22px;
  color: #707070;
`;

export const StyledTag = styled.div`
  color: ${(props) => props.color};
  opacity: ${(props) => (props.color === '#c17fce' ? '100%' : '60%')};
  margin-left: 13.5px;
`;

const tagList: string[] = ['ABOUT', 'PORTFOLIO', 'BLOG', 'CONTACT', 'LOGIN'];

type TagPropsType = {
  tagName: string;
  currentTag: string;
};

function Tag({ tagName, currentTag }: TagPropsType): ReactElement {
  const color = tagName === currentTag ? '#c17fce' : '#00000';
  return <StyledTag color={color}>{tagName}</StyledTag>;
}

type HeaderPropsType = {
  currentTag: string;
};

function Header({ currentTag }: HeaderPropsType): ReactElement {
  return (
    <StyledHeaderBox>
      <StyledTagListBox>
        {tagList.map((tag: string, index: number) => (
          <Tag tagName={tag} currentTag={currentTag} key={index} />
        ))}
      </StyledTagListBox>
    </StyledHeaderBox>
  );
}

export default Header;
