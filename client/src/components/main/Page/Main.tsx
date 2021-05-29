import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PageBase from '@components/common/PageBase/PageBase';
import Header from '@components/common/Header/index';
import IntroduceBox from '@components/main/IntroduceBox/index';
import AnimationBox from '@components/main/AnimationBox/index';
import ThemeButton from '@components/common/ThemeBtn';
import { IPagePorps } from '@types';

const StyledThemeBtn = styled(ThemeButton)`
  margin: 8vh 0 0 5vw;
`;

function MainPage({ mode }: IPagePorps): ReactElement {
  return (
    <PageBase mode={mode} title="Develog">
      <Header currentPage="index" />
      <IntroduceBox />
      <StyledThemeBtn />
      <AnimationBox />
    </PageBase>
  );
}

export default MainPage;
