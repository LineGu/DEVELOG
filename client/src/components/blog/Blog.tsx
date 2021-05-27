import React, { ReactElement } from 'react';
import PageBase from 'src/components/common/PageBase';
import { IPagePorps } from '@types';
import Header from 'src/components/common/Header/index';

function BlogPageComponent({ mode }: IPagePorps): ReactElement {
  return (
    <PageBase mode={mode} title="Develog">
      <Header currentPage="blog" />
    </PageBase>
  );
}

export default BlogPageComponent;
