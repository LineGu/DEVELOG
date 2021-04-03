import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';

const StyledBlogMark = styled.span`
  font-family: 'PT Sans';
  font-size: 7.68vh;
  font-weight: 300;

  color: ${(props) => props.color ?? Theme.BASE};
  @media (max-width: ${Theme.PC}) {
    font-size: 7vh;
  }
  &::selection {
    background: none;
  }
`;

function BlogMark(): ReactElement {
  return (
    <StyledBlogMark>
      Develo<StyledBlogMark color={Theme.POINT}>g</StyledBlogMark>
    </StyledBlogMark>
  );
}

export default BlogMark;
