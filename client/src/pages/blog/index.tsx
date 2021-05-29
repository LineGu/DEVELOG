import React, { ReactElement } from 'react';
import PostPage from '@components/blog/Page';

interface IPageProps {
  mode: string;
}

const BlogPage = ({ mode = 'LightMode' }: IPageProps): ReactElement => {
  return <PostPage mode={mode} />;
};

export default BlogPage;
