import React, { ReactElement } from 'react';
import PageBase from 'src/components/common/PageBase';
import { IPagePorps } from '@types';
import Header from 'src/components/common/Header/index';
import IntroduceBox from 'src/components/main/IntroduceBox/index';
import AnimationBox from 'src/components/main/AnimationBox/index';

function MainPage({ mode }: IPagePorps): ReactElement {
  return (
    <PageBase mode={mode} title="Develog">
      <Header currentPage="index" />
      <IntroduceBox />
      <AnimationBox />
    </PageBase>
  );
}

export default MainPage;
