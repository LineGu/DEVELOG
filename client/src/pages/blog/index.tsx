import React, { ReactElement } from 'react';
import PostPage from '@components/log/Page';

interface IPageProps {
  mode: string;
}

const BlogPage = ({ mode = 'LightMode' }: IPageProps): ReactElement => {
  return <PostPage mode={mode} />;
};

export default BlogPage;
