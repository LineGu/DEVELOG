import React, { ReactElement } from 'react';
import PageBase from 'src/components/common/PageBase';
import { IPagePorps } from '@types';
import PostEditor from 'src/components/write/PostEditor/index';
import useDependencyTheme from '@hooks/useDependencyTheme';

function PostPageComponent({ mode }: IPagePorps): ReactElement {
  useDependencyTheme();
  return (
    <PageBase mode={mode} title="Develog">
      <PostEditor />
    </PageBase>
  );
}

export default PostPageComponent;
