import React, { ReactElement } from 'react';
import HeaderTemp from '@templates/index';
import TextLoop from '@molecules/TextLoop/index';
import AnimationBox from '@organisms/AnimationBox/index';

const IndexPage = (): ReactElement => {
  return (
    <HeaderTemp currentPage="index">
      <TextLoop />
      <AnimationBox />
    </HeaderTemp>
  );
};

export default IndexPage;
