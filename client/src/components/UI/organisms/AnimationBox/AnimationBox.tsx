import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { DiJsBadge, DiHtml5, DiCss3, DiReact } from 'react-icons/di';
import { SiRedux, SiNextDotJs, SiMysql } from 'react-icons/si';
import useScroll from '@hook/useScroll';
import Theme from '@theme/index';

const StyledAnimationBox = styled.div<{ scroll: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 5000%;
  color: ${() => Theme.INTRO};
  .scrollInducer {
    position: absolute;
    display: flex;
    justify-content: center;
    opacity: ${(props) => 76 - props.scroll}%;
  }
  .scrollInducer > span {
    font-size: 2vmin;
    margin: 11vh 0 0 0;
  }
  .startTitle {
    visibility: ${(props) => (props.scroll < 70 || props.scroll > 490 ? 'hidden' : 'visible')};
    opacity: ${(props) => 0.4 * (props.scroll - 70)}%;
  }
  .secondTitle {
    visibility: ${(props) => (props.scroll < 500 ? 'hidden' : 'visible')};
    opacity: ${(props) => 0.4 * (props.scroll - 500)}%;
    top: ${(props) => {
      const { scroll } = props;
      if (scroll < 700) return '45';
      return scroll < 930 ? -0.1087 * (scroll - 700) + 45 : 20;
    }}%;
    left: ${(props) => (props.scroll < 1400 ? '' : props.scroll - 1355)}%;
  }
  .thirdTitle {
    visibility: ${(props) => (props.scroll < 930 ? 'hidden' : 'visible')};
    opacity: ${(props) => 0.4 * (props.scroll - 930)}%;
    top: 55%;
    left: ${(props) => (props.scroll < 1400 ? '' : props.scroll - 1360)}%;
  }
  .line {
    visibility: ${(props) => (props.scroll < 600 ? 'hidden' : 'visible')};
    right: ${(props) => {
      if (props.scroll > 1400) return -2 * props.scroll + 2800;
      return props.scroll > 800 ? 0 : 400 - props.scroll / 2;
    }}%;
    top: ${(props) => {
      const { scroll } = props;
      if (scroll < 700) return '55';
      return scroll < 930 ? -0.1087 * (scroll - 700) + 55 : 30;
    }}%;
  }
`;

const StyledArrow = styled(IoIosArrowDown)`
  position: absolute;
  margin: 3em 0 0 0;
  width: 8vmin;
  height: 8vmin;
`;

const StyledTitle = styled.span`
  text-align: center;
  position: fixed;
  font-size: 4vmin;
  top: 45%;
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;
`;

const StyledLine = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid ${() => Theme.POINT};
  top: 55%;
  right: 100%;
`;

function AnimationBox(): ReactElement {
  const { position } = useScroll();
  return (
    <StyledAnimationBox scroll={position}>
      <div className="scrollInducer">
        <StyledArrow />
        <span>Scroll</span>
      </div>

      <StyledTitle className="startTitle">
        안녕하세요.
        <br /> 개발자 Linegu 입니다.
      </StyledTitle>
      <StyledTitle className="secondTitle">다양한 기술을 배워</StyledTitle>
      <StyledLine className="line">
        <SiMysql style={{ width: '12vw', height: '12vw', color: '#196C89', margin: '0 0 0 0' }} />
        <SiNextDotJs style={{ width: '10vw', height: '10vw', color: '#1E1E29', margin: '10px 0 0 0' }} />
        <SiRedux style={{ width: '10vw', height: '10vw', color: '#6B44B3', margin: '10px 0 0 0' }} />
        <DiReact style={{ width: '12vw', height: '12vw', color: '#3BD6F7', margin: '0 0 0 0' }} />
        <DiCss3 style={{ width: '12vw', height: '12vw', color: '#006BAF', margin: '0 0 0 0' }} />
        <DiHtml5 style={{ width: '12vw', height: '12vw', color: '#EA4626', margin: '0 0 0 0' }} />
        <DiJsBadge style={{ width: '10vw', height: '10vw', color: '#FFB33A', margin: '10px 0 0 0' }} />
      </StyledLine>
      <StyledTitle className="thirdTitle">
        처음 접하는 분들에게
        <br />
        쉽게 설명하고자 개설한 블로그입니다.
      </StyledTitle>
    </StyledAnimationBox>
  );
}

export default AnimationBox;
