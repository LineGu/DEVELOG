import React, { ReactElement } from 'react';
import styled from 'styled-components';

const StyledBlogMark = styled.span`
  font-size: 73px;
  font-weight: 800;
  color: ${(props) => props.color ?? '#707070'};
  margin-left: ${(props) => (props.color ? '0' : '18.2%')};
  margin-top: 5%;
`;

function BlogMark(): ReactElement {
  return (
    <StyledBlogMark>
      Develo<StyledBlogMark color="#c17fce">g</StyledBlogMark>
    </StyledBlogMark>
  );
}

export default BlogMark;
