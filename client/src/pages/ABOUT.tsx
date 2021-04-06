import React, { ReactElement } from 'react';
import HeaderTemp from 'src/components/templates/index';

interface IPageProps {
  mode: string;
}

function AboutPage({ mode = 'LightMode' }: IPageProps): ReactElement {
  return <HeaderTemp currentPage="ABOUT" defaultMode={mode} />;
}

export default AboutPage;
