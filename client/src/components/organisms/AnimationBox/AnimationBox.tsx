import React, { ReactElement, useState, useCallback } from 'react';
import styled from 'styled-components';
import TechnicalStackBox from '@molecules/TechnicalStackBox/index';
import useScroll from '@hook/useScroll';
import useDependencyTheme from '@hook/useDependencyTheme';
import Theme from '@theme/index';
import StaticPageNav from '@molecules/PageNav/StaticPageNav';
import { DownArrowIcon, ScrollIcon, UpArrowIcon, MacIcon, PhoneIcon, DarkPhoneIcon } from '@icons/index';

interface IScrollAnimationProps {
  scroll: number;
  height?: string;
}

const StyledAnimationBox = styled.div<IScrollAnimationProps>`
  display: flex;
  position: relative;
  z-index: 5;
  justify-content: center;
  width: 100%;
  height: ${({ height }) => height};
  color: ${() => Theme.INTRO};
  background-color: ${({ scroll }) => (scroll > 1460 && scroll < 3900 ? Theme.MODE_MARK : '')};
  opacity: ${({ scroll }) => (scroll > 3600 && scroll < 3900 ? -3 * (scroll - 3900) : 100)}%;

  .scrollInducer {
    display: flex;
    position: absolute;
    height: 10vmin;
    margin: 3em 0 0 0;
    justify-content: center;
  }
  .scrollInducer > *:not(.upArrow) {
    opacity: ${({ scroll }) => 76 - scroll}%;
  }
  .scrollInducer > *:hover {
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
    top: 57vh;
    left: ${({ scroll }) => (scroll < 1400 ? '' : scroll - 1360)}%;
    opacity: ${({ scroll }) => 0.4 * (scroll - 930)}%;

    @media (max-width: ${() => Theme.PC}) {
      top: 45%;
    }
  }

  .webTitle {
    visibility: ${({ scroll }) => (scroll < 1700 || scroll > 2100 ? 'hidden' : 'visible')};
    top: 45%;
    right: 15%;
    opacity: ${({ scroll }) => 0.4 * (scroll - 1650)}%;
    @media (max-width: ${() => Theme.HDPC}) {
      top: 40%;
      right: 10%;
    }
    @media (max-width: ${() => Theme.PC}) {
      top: 40%;
      right: 10%;
    }
  }

  .mobileTitle {
    visibility: ${({ scroll }) => (scroll < 2300 || scroll > 2700 ? 'hidden' : 'visible')};
    top: 40%;
    right: 10%;
    opacity: ${({ scroll }) => 0.4 * (scroll - 2300)}%;
    @media (max-width: ${() => Theme.HDPC}) {
      top: 25%;
      right: 10%;
    }
    @media (max-width: ${() => Theme.PC}) {
      top: 30%;
      right: 10%;
    }
  }

  .modeTitle {
    visibility: ${({ scroll }) => (scroll < 2900 || scroll > 3300 ? 'hidden' : 'visible')};
    top: 16%;
    opacity: ${({ scroll }) => 0.5 * (scroll - 2900)}%;
    @media (max-width: ${() => Theme.PC}) {
      top: 23%;
    }
  }

  .feedbackTitle {
    visibility: ${({ scroll }) => (scroll < 3350 || scroll > 3900 ? 'hidden' : 'visible')};
    z-index: 0;
    top: 40%;
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
    z-index: 6;
    visibility: ${({ height }) => (height === '3930%' ? 'hidden' : 'visible')};
    margin: 3em 0 0 0;
    color: ${() => Theme.INTRO};
  }

  .upArrow {
    position: fixed;
    z-index: 5;
    visibility: ${({ scroll }) => (scroll < 50 ? 'hidden' : 'visible')};
    margin: 3em 0 0 0;
    opacity: 100%;
    color: ${() => Theme.INTRO};
  }
  .top {
    margin: 11vh 0 0 0;
  }

  @media (max-width: ${() => Theme.PC}) {
    position: absolute;
    top: 75vh;
    color: ${() => Theme.BASE};
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

const StyledMacIcon = styled(MacIcon)<IScrollAnimationProps>`
  position: fixed;
  z-index: 0;
  visibility: ${({ scroll }) => (scroll < 1460 || scroll > 2850 ? 'hidden' : 'visible')};
  opacity: ${({ scroll }) => (scroll < 1460 ? 0 : scroll - 1460)}%;
  left: ${({ scroll }) => {
    if (scroll < 1600) return 20;
    if (scroll > 1600 && scroll < 1700) return -0.15 * (scroll - 1600) + 20;
    return 5;
  }}vw;
`;

const StyledPhoneIcon = styled(PhoneIcon)<IScrollAnimationProps>`
  position: fixed;
  z-index: 3;
  visibility: ${({ scroll }) => (scroll < 2100 ? 'hidden' : 'visible')};
  opacity: ${({ scroll }) => (scroll < 2100 ? 0 : scroll - 2100)}%;
  left: ${({ scroll }) => {
    if (scroll < 2700) return 30;
    if (scroll > 2700 && scroll < 2900) return -0.3 * (scroll - 2700) + 30;
    if (scroll > 3350) return -0.95 * (scroll - 3350) - 30;
    return -30;
  }}%;
`;

const StyledDarkPhoneIcon = styled(DarkPhoneIcon)<IScrollAnimationProps>`
  position: fixed;
  z-index: 3;
  visibility: ${({ scroll }) => (scroll < 2800 ? 'hidden' : 'visible')};
  right: ${({ scroll }) => {
    if (scroll < 2800) return -25;
    if (scroll > 2800 && scroll < 3000) return 0.225 * (scroll - 2800) - 25;
    if (scroll > 3350) return -0.5 * (scroll - 3350) + 20;
    return 20;
  }}%;
`;

const StyledStaticPageNav = styled(StaticPageNav)<IScrollAnimationProps>`
  position: fixed;
  z-index: 10;
  top: 50%;
  width: 70%;
  justify-content: center;
  padding-bottom: 1em;
  font-size: 2vw;
  font-weight: 400;
  border-bottom: 1px solid ${() => Theme.POINT};
  & > div:hover {
    cursor: pointer;
    color: ${() => Theme.POINT};
  }
  & > div {
    margin-right: 2vw;
  }
  @media (max-width: ${() => Theme.PC}) {
    display: flex;
    width: 90%;
    & > div {
      margin-right: 1vw;
    }
  }
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
