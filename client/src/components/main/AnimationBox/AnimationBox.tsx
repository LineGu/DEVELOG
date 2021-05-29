import React, { ReactElement, useState, useCallback } from 'react';
import TechnicalStackBox from '@components/main/TechnicalStackBox/index';
import useScroll from '@hooks/useScroll';
import useDependencyTheme from '@hooks/useDependencyTheme';
import { DownArrowIcon, ScrollIcon, UpArrowIcon } from '@icons';
import {
  StyledAnimationBox,
  StyledTitle,
  StyledMacIcon,
  StyledPhoneIcon,
  StyledDarkPhoneIcon,
  StyledStaticPageNav,
} from './StyledComponents';

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
    <StyledAnimationBox scroll={position} height={isShowAnimation ? '3930%' : '0%'}>
      <div className="scrollInducer" onClick={controlAnimationBox}>
        <DownArrowIcon className="downArrow" />
        <UpArrowIcon className="upArrow" />
        <p className="upArrow top">Top</p>
        <span>
          {isShowAnimation ? '접기' : '펼치기'}
          <br />
          <br />
          {isShowAnimation ? 'Scroll Please' : ''}
          <br />
          {isShowAnimation ? <ScrollIcon /> : ''}
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
      <StyledMacIcon scroll={position} />
      <StyledTitle className="webTitle">웹 사이트와</StyledTitle>
      <StyledPhoneIcon scroll={position} />
      <StyledTitle className="mobileTitle">모바일에서</StyledTitle>
      <StyledDarkPhoneIcon scroll={position} />
      <StyledTitle className="modeTitle">
        다양한 분위기로
        <br /> 접속하세요.
      </StyledTitle>
      <StyledTitle className="feedbackTitle">
        언제나 피드백 환영입니다!
        <br />
        <br />
        <br /> -Develog-
      </StyledTitle>
      {position > 3900 ? <StyledStaticPageNav scroll={position} currentPage="index" /> : <></>}
    </StyledAnimationBox>
  );
}

export default AnimationBox;
