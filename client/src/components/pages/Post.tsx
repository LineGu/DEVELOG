import React, { ReactElement } from 'react';
import PageBase from '@templates/PageBase';
import { IPagePorps } from '@interfaces';
import PostBox from '@organisms/PostBox/index';
import useDependencyTheme from '@hook/useDependencyTheme';

function PostPageComponent({ mode }: IPagePorps): ReactElement {
  const { changeMode } = useDependencyTheme();
  return (
    <PageBase mode={mode} title="Develog">
      <PostBox />
    </PageBase>
  );
}

export default PostPageComponent;
