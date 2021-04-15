import React, { ReactElement } from 'react';
import PageBase from '@templates/PageBase';
import { IPagePorps } from '@interfaces';
import PostEditor from '@organisms/PostEditor/index';
import useDependencyTheme from '@hook/useDependencyTheme';

function PostPageComponent({ mode }: IPagePorps): ReactElement {
  const { changeMode } = useDependencyTheme();
  return (
    <PageBase mode={mode} title="Develog">
      <PostEditor />
    </PageBase>
  );
}

export default PostPageComponent;
