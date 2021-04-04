import React, { ReactElement } from 'react';
import styled from 'styled-components';
import useTextLoop from '@utils/textLoop';
import Theme from '@theme/index';
import introList, { pointString } from '@utils/introduceList';

const StyledTextLoop = styled.div<{ margin: string; color: string }>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
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
  z-index: 2;
  font-size: 4vh;
  font-family: 'PT Sans';
  letter-spacing: 2px;
  line-height: 7vh;
  text-align: center;
  transition: opacity 0.5s ease 0s;
  opacity: ${(props) => props.opacity};
`;

const StyledPointText = styled.span`
  color: ${() => Theme.POINT};
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
      {
        <StyledTextBox opacity={opacity}>
          {beforeIntroduce.map((introduce) =>
            pointString.includes(introduce) ? <StyledPointText>{introduce}</StyledPointText> : introduce,
          )}
          <br />
          {afterIntroduce.map((introduce) =>
            pointString.includes(introduce) ? <StyledPointText>{introduce}</StyledPointText> : introduce,
          )}
        </StyledTextBox>
      }
    </StyledTextLoop>
  );
}

export default TextLoop;
