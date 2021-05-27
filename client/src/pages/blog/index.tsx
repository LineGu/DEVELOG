import React, { ReactElement } from 'react';
import BlogPageComponent from 'src/components/blog/Blog';

interface IPageProps {
  mode: string;
}

const BlogPage = ({ mode = 'LightMode' }: IPageProps): ReactElement => {
  return <BlogPageComponent mode={mode} />;
};

export default BlogPage;
