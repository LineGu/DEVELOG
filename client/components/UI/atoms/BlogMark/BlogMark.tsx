import React, { ReactElement } from 'react';
import styled from 'styled-components';

const StyledBlogMark = styled.span`
  font-size: 77px;
  font-weight: 800;
  color: ${(props) => props.color ?? '#707070'};
  margin-left: ${(props) => (props.color ? '0%' : '3%')};
  margin-bottom: 1%;
  @media (max-width: 960px) {
    font-size: 7vh;
  }
`;

function BlogMark(): ReactElement {
  return (
    <StyledBlogMark>
      Develo<StyledBlogMark color="#c17fce">g</StyledBlogMark>
    </StyledBlogMark>
  );
}

export default BlogMark;
