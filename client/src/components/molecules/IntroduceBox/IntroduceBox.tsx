import React, { ReactElement } from 'react';
import styled from 'styled-components';
import useTextLoop from '@hook/useTextLoop';
import introduceList from '@construction/introduceList';
import Theme from '@theme/index';
import FocusBox from '@atoms/FocusBox/index';
import IntroduceText from '@atoms/IntroduceText/index';
import { IDynamicStyledProps } from '@interfaces';

const StyledFocusBox = styled(FocusBox)`
  margin-top: 30px;
  @media (max-width: ${() => Theme.PC}) {
    top: 17vh;
  }
`;

const StyledBackground = styled.img`
  position: absolute;
  z-index: 0;
  opacity: 60%;
  width: 100vmin;
  height: 100%;
  pointer-events: none;
  transition: opacity 0.5s;
`;

const StyledTextBox = styled.span<IDynamicStyledProps>`
  position: absolute;
  opacity: ${({ opacity }) => opacity};
  color: ${() => Theme.INTRO};
  text-align: center;
  font-size: 4vmin;
  font-family: 'PT Sans';
  letter-spacing: 2px;
  line-height: 7vmin;
  transition: opacity 0.5s ease 0s;
`;

function IntroduceBox(): ReactElement {
  const { margin, color, opacity, introduce: introduceText } = useTextLoop(introduceList);

  return (
    <StyledFocusBox margin={margin} color={color}>
      <StyledBackground src={Theme.INTRO_BG} alt="background" />
      <StyledTextBox opacity={opacity}>
        <IntroduceText introduce={introduceText} />
      </StyledTextBox>
    </StyledFocusBox>
  );
}

export default IntroduceBox;
