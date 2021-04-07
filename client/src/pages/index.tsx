import React, { ReactElement } from 'react';
import MainPage from '@pages/Main';

interface IPageProps {
  mode: string;
}

const IndexPage = ({ mode = 'LightMode' }: IPageProps): ReactElement => {
  return <MainPage mode={mode} />;
};

export default IndexPage;
