import React, { ReactElement } from 'react';
import PageBase from '@templates/PageBase';
import { IPagePorps } from '@interfaces';
import Header from '@organisms/Header/index';
import Footer from '@organisms/Footer/index';
import IntroduceBox from 'src/components/molecules/IntroduceBox/index';
import AnimationBox from 'src/components/organisms/AnimationBox/index';

function MainPage({ mode }: IPagePorps): ReactElement {
  return (
    <PageBase mode={mode} title="Develog">
      <Header currentPage="index" />
      <IntroduceBox />
      <AnimationBox />
      <Footer />
    </PageBase>
  );
}

export default MainPage;
