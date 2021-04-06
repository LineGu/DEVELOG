import React, { ReactElement } from 'react';
import Link from 'next/link';
import BlogMark from '@atoms/BlogMark/index';

function BlogMarkLink(): ReactElement {
  const BlogMarkChildern = BlogMark();
  return <Link href="/">{BlogMarkChildern}</Link>;
}

export default BlogMarkLink;
