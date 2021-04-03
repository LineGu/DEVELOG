import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledMovingBox = styled.div<{ margin: string }>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  .left {
    margin-right: ${(props) => props.margin};
    transition: margin-right 0.5s ease 1s;
  }
`;

const StyledSlideBox = styled.div`
  width: 50%;
  height: 100%;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
`;

const StyledTextBox = styled.span<{ opacity: string }>`
  position: absolute;
  z-index: 2;
  font-size: 3vh;
  text-align: center;
  transition: opacity 0.5s ease 0s;
  opacity: ${(props) => props.opacity};
`;

const introList = [
  `안녕하세요.프론트엔트 개발자 강현구입니다.`,
  '누구보다 열심히 하는 강현구입니다.',
  '개발은 제 즐거움입니다.',
];

function MovingBox(): ReactElement {
  const [margin, setMargin] = useState<string>('100%');
  const [opacity, setOpacity] = useState<string>('100%');
  const [intro, setIntro] = useState<string>(introList[0]);
  useEffect(() => {
    let i = 1;
    setMargin('0%');
    setInterval(() => setOpacity('0%'), 2000);
    setInterval(() => {
      setOpacity('100%');
      setIntro(introList[i]);
      i += 1;
      i = i > 2 ? 0 : i;
    }, 4000);
  }, []);
  return (
    <StyledMovingBox margin={margin}>
      <StyledSlideBox className="left" />
      <StyledSlideBox />
      <StyledTextBox opacity={opacity}>{intro}</StyledTextBox>
    </StyledMovingBox>
  );
}

export default MovingBox;
