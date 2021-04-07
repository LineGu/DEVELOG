import React, { ReactElement } from 'react';
import PageBase from '@templates/PageBase';
import { IPagePorps } from '@interfaces';
import Header from '@organisms/Header/index';
import IntroduceBox from 'src/components/molecules/IntroduceBox/index';
import AnimationBox from 'src/components/organisms/AnimationBox/index';

function MainPage({ mode }: IPagePorps): ReactElement {
  return (
    <PageBase defaultMode={mode} title="Develog">
      <Header currentPage="index" />
      <IntroduceBox />
      <AnimationBox />
    </PageBase>
  );
}

export default MainPage;
