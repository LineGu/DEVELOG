import React, { ReactElement } from 'react';
import HeaderTemp from 'src/components/templates/index';
import IntroduceBox from 'src/components/molecules/IntroduceBox/index';
import AnimationBox from 'src/components/organisms/AnimationBox/index';

interface IPageProps {
  mode: string;
}

const IndexPage = ({ mode = 'LightMode' }: IPageProps): ReactElement => {
  return (
    <HeaderTemp currentPage="index" defaultMode={mode}>
      <IntroduceBox />
      <AnimationBox />
    </HeaderTemp>
  );
};

export default IndexPage;
