import React, { ReactElement } from 'react';
import styled from 'styled-components';
import BlogMark from '../../atoms/BlogMark/index';
import TabNav from '../../molecules/TabNav/index';

const StyledHeaderSection = styled.header`
  display: flex;
  position: relative;
  width: 100%;
  height: 19.2%;
  background-color: #f1efff;
`;

type Props = {
  currentTag: string;
};

function Header({ currentTag }: Props): ReactElement {
  return (
    <StyledHeaderSection>
      <BlogMark />
      <TabNav currentTag={currentTag} />
    </StyledHeaderSection>
  );
}

export default Header;
