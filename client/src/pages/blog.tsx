import React, { ReactElement } from 'react';
import BlogPageComponent from '@pages/Blog';

interface IPageProps {
  mode: string;
}

const BlogPage = ({ mode = 'LightMode' }: IPageProps): ReactElement => {
  return <BlogPageComponent mode={mode} />;
};

export default BlogPage;
