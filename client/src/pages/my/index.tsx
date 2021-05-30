import React, { ReactElement } from 'react';
import MyPageComponent from '@components/my/Page';

interface IPageProps {
  mode: string;
}

const MyPage = ({ mode = 'LightMode' }: IPageProps): ReactElement => {
  return <MyPageComponent mode={mode} />;
};

export default MyPage;
