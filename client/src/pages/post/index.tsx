import React, { ReactElement } from 'react';
import PostPageComponent from '@components/post/Page/index';

interface IPageProps {
  mode: string;
}

const PostPage = ({ mode = 'LightMode' }: IPageProps): ReactElement => {
  return <PostPageComponent mode={mode} />;
};

export default PostPage;
