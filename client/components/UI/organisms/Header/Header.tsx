import React, { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import BlogMark from '../../atoms/BlogMark/index';
import TabNav from '../../molecules/TabNav/index';
import { WidthContext } from '../../../../utils/widthProvider';

const StyledHeaderSection = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15%;
  background-color: #f1efff;
  @media (max-width: 960px) {
    height: 10%;
  }
`;

const StyledHeaderBaseLine = styled.div<BaseLineProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  width: ${(props) => -(0.03684 * props.width) + 136}%;
  height: 100%;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

type Props = {
  currentTag: string;
};

type BaseLineProps = {
  width: number;
};

function Header({ currentTag }: Props): ReactElement {
  const { width } = useContext(WidthContext);

  return (
    <StyledHeaderSection>
      <StyledHeaderBaseLine width={width}>
        <BlogMark />
        <TabNav currentTag={currentTag} />
      </StyledHeaderBaseLine>
    </StyledHeaderSection>
  );
}

export default Header;
