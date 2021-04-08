import React, { ReactElement, useState, useCallback } from 'react';
import styled from 'styled-components';
import TechnicalStackBox from '@molecules/TechnicalStackBox/index';
import useScroll from '@hook/useScroll';
import useDependencyTheme from '@hook/useDependencyTheme';
import Theme from '@theme/index';
import { DownArrowIcon } from '@icons/index';

interface IScrollAnimationProps {
  scroll: number;
  height: string;
}

const StyledAnimationBox = styled.div<IScrollAnimationProps>`
  display: flex;
  position: relative;
  z-index: 5;
  justify-content: center;
  width: 100%;
  height: ${({ height }) => height};
  color: ${() => Theme.INTRO};
  .scrollInducer {
    display: flex;
    position: absolute;
    height: 10vmin;
    margin: 3em 0 0 0;
    justify-content: center;
    opacity: ${({ scroll }) => 76 - scroll}%;
  }
  .scrollInducer:hover {
    opacity: 50%;
    cursor: pointer;
  }
  .scrollInducer > span {
    margin: 11vh 0 0 0;
    text-align: center;
    font-size: 2vmin;
    color: ${() => Theme.INTRO};
  }
  .startTitle {
    visibility: ${({ scroll }) => (scroll < 70 || scroll > 490 ? 'hidden' : 'visible')};
    opacity: ${({ scroll }) => 0.4 * (scroll - 70)}%;
  }
  .secondTitle {
    visibility: ${({ scroll }) => (scroll < 500 ? 'hidden' : 'visible')};
    top: ${({ scroll }) => {
      if (scroll < 700) return '45';
      return scroll < 930 ? -0.1087 * (scroll - 700) + 45 : 20;
    }}%;
    left: ${({ scroll }) => (scroll < 1400 ? '' : scroll - 1355)}%;
    opacity: ${({ scroll }) => 0.4 * (scroll - 500)}%;
  }
  .thirdTitle {
    visibility: ${({ scroll }) => (scroll < 930 ? 'hidden' : 'visible')};
    top: 55%;
    left: ${({ scroll }) => (scroll < 1400 ? '' : scroll - 1360)}%;
    opacity: ${({ scroll }) => 0.4 * (scroll - 930)}%;
  }
  .iconBox {
    visibility: ${({ scroll }) => (scroll < 600 ? 'hidden' : 'visible')};
    top: ${({ scroll }) => {
      if (scroll < 700) return '55';
      return scroll < 930 ? -0.1087 * (scroll - 700) + 55 : 30;
    }}%;
    right: ${({ scroll }) => {
      if (scroll > 1400) return -2 * scroll + 2800;
      return scroll > 800 ? 0 : 400 - scroll / 2;
    }}%;
  }
  .downArrow {
    position: absolute;
    visibility: ${({ height }) => (height === '5000%' ? 'hidden' : 'visible')};
    margin: 3em 0 0 0;
    color: ${() => Theme.INTRO};
  }
`;

const StyledTitle = styled.span`
  text-align: center;
  position: fixed;
  font-size: 4vmin;
  white-space: nowrap;
  top: 45%;
  overflow: hidden;
  text-overflow: clip;
`;

function AnimationBox(): ReactElement {
  useDependencyTheme();
  const { position } = useScroll();
  const [isShowAnimation, setIsShowAnimation] = useState(false);

  const controlAnimationBox = useCallback((): void => {
    setIsShowAnimation(!isShowAnimation);
    if (!isShowAnimation) {
      setTimeout(() => document.documentElement.scrollTo({ top: 170, left: 0, behavior: 'smooth' }), 100);
    }
  }, [isShowAnimation]);

  return (
    <StyledAnimationBox scroll={position} height={isShowAnimation ? '5000%' : '22%'}>
      <div className="scrollInducer" onClick={controlAnimationBox}>
        <DownArrowIcon className="downArrow" />
        <span>
          {isShowAnimation ? '접기' : '펼치기'}
          <br />
          <br />
          {isShowAnimation ? 'Scroll Please' : ''}
        </span>
      </div>

      <StyledTitle className="startTitle">
        안녕하세요.
        <br /> 개발자 Linegu 입니다.
      </StyledTitle>
      <StyledTitle className="secondTitle">다양한 기술을 배워</StyledTitle>
      <TechnicalStackBox className="iconBox" />
      <StyledTitle className="thirdTitle">
        처음 접하는 분들에게
        <br />
        쉽게 설명하고자 개설한 블로그입니다.
      </StyledTitle>
    </StyledAnimationBox>
  );
}

export default AnimationBox;
