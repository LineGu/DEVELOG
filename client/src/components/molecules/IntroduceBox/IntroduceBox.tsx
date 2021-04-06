import React, { ReactElement } from 'react';
import styled from 'styled-components';
import useTextLoop from '@hook/useTextLoop';
import introduceList from '@utils/introduceList';
import Theme from '@theme/index';
import FocusBox from '@atoms/FocusBox/index';
import IntroduceText from '@atoms/IntroduceText/index';

interface ITextBoxProps {
  opacity: string;
}

const StyledFocusBox = styled(FocusBox)`
  margin-top: 30px;
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

const StyledTextBox = styled.span<ITextBoxProps>`
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
  const { margin, color, opacity, introduce } = useTextLoop(introduceList);

  return (
    <StyledFocusBox margin={margin} color={color}>
      <StyledBackground src={Theme.INTRO_BG} alt="background" />
      <StyledTextBox opacity={opacity}>
        <IntroduceText introduce={introduce} />
      </StyledTextBox>
    </StyledFocusBox>
  );
}

export default IntroduceBox;
