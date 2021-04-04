import React, { ReactElement } from 'react';
import styled from 'styled-components';
import useTextLoop from '@utils/textLoop';
import Theme from '@theme/index';
import introList, { pointWord } from '@utils/introduceList';

const StyledTextLoop = styled.div<{ margin: string; color: string }>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vmin;
  margin-top: 30px;

  .left {
    border-top: 1px solid ${(props) => props.color};
    border-bottom: 1px solid ${(props) => (props.color === Theme.POINT ? Theme.BLACK : Theme.POINT)};
    margin-right: ${(props) => props.margin};
    transition: margin-right 0.5s ease 0s;
  }
  .right {
    border-bottom: 1px solid ${(props) => props.color};
    border-top: 1px solid ${(props) => (props.color === Theme.POINT ? Theme.BLACK : Theme.POINT)};
  }
`;

const StyledSlideBox = styled.div`
  width: 47%;
  height: 100%;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
`;

const StyledTextBox = styled.span<{ opacity: string }>`
  position: absolute;
  font-size: 4vmin;
  font-family: 'PT Sans';
  letter-spacing: 2px;
  line-height: 7vmin;
  text-align: center;
  transition: opacity 0.5s ease 0s;
  opacity: ${(props) => props.opacity};
  color: ${() => Theme.INTRO};
`;

const StyledPointText = styled.span`
  color: ${() => Theme.POINT};
`;

const StyledBackground = styled.img`
  position: absolute;
  opacity: 60%;
  width: 90vmax;
  height: 135%;
  z-index: 0;
  pointer-events: none;
  transition: opacity 0.5s;
`;

function TextLoop(): ReactElement {
  const { margin, color, opacity, intro } = useTextLoop(introList);
  const introduceDivided = intro.split('/');
  const beforeIntroduce = introduceDivided[0].split('#');
  const afterIntroduce = introduceDivided[1].split('#');
  return (
    <StyledTextLoop margin={margin} color={color}>
      <StyledSlideBox className="left" />
      <StyledSlideBox className="right" />
      <StyledBackground src="https://i.ibb.co/Wz7KF2D/background.png" alt="background" />
      {
        <StyledTextBox opacity={opacity}>
          {beforeIntroduce.map((introduce, index) =>
            pointWord.includes(introduce) ? <StyledPointText key={index}>{introduce}</StyledPointText> : introduce,
          )}
          <br />
          {afterIntroduce.map((introduce, index) =>
            pointWord.includes(introduce) ? <StyledPointText key={index}>{introduce}</StyledPointText> : introduce,
          )}
        </StyledTextBox>
      }
    </StyledTextLoop>
  );
}

export default TextLoop;
