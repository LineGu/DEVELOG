import React, { ReactElement } from 'react';
import PageBase from '@templates/PageBase';
import { IPagePorps } from '@interfaces';
import Header from '@organisms/Header/index';

function BlogPageComponent({ mode }: IPagePorps): ReactElement {
  return (
    <PageBase mode={mode} title="Develog">
      <Header currentPage="blog" />
    </PageBase>
  );
}

export default BlogPageComponent;
