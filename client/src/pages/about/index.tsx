import React, { ReactElement } from 'react';
import AboutPageComponent from '@components/about/Page';

interface IPageProps {
  mode: string;
}

const AboutPage = ({ mode = 'LightMode' }: IPageProps): ReactElement => {
  return <AboutPageComponent mode={mode} />;
};

export default AboutPage;
