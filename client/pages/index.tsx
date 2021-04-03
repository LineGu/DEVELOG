import React, { ReactElement } from 'react';
import Head from 'next/head';
import GlobalStyle from '@theme/GlobalStyle';
import Header from '@organisms/Header';
import ThemeModeProvider from '@theme/themeProvider';
import SomePage from './[pageLink]';

const IndexPage = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>DEVELOG</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <SomePage />
    </>
  );
};

export default IndexPage;
