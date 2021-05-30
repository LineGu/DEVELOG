import React, { ReactElement } from 'react';
import PageBase from '@components/common/PageBase/PageBase';
import Header from '@components/common/Header';
import { IPagePorps } from '@types';

function BlogPageComponent({ mode }: IPagePorps): ReactElement {
  return (
    <PageBase mode={mode} title="Develog">
      <Header currentPage="blog" />
    </PageBase>
  );
}

export default BlogPageComponent;
