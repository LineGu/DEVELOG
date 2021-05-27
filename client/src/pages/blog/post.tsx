import React, { ReactElement } from 'react';
import PostPageComponent from 'src/components/write/Post';

interface IPageProps {
  mode: string;
}

const PostPage = ({ mode = 'LightMode' }: IPageProps): ReactElement => {
  return <PostPageComponent mode={mode} />;
};

export default PostPage;
