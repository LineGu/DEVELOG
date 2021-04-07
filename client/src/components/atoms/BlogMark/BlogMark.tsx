import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import { IColorProps } from '@interfaces';

const StyledBlogMark = styled.span<IColorProps>`
  color: ${({ color }) => color ?? Theme.BASE};
  font-family: 'PT Sans';
  font-size: 7.68vh;
  font-weight: 300;

  &::selection {
    background: none;
  }

  @media (max-width: ${Theme.PC}) {
    font-size: 7vh;
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
