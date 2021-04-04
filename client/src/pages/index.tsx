import React, { ReactElement } from 'react';
import HeaderTemp from '@templates/index';
import TextLoop from '@molecules/TextLoop/index';

const IndexPage = (): ReactElement => {
  return (
    <HeaderTemp currentPage="index">
      <TextLoop />
    </HeaderTemp>
  );
};

export default IndexPage;
