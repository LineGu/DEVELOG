import React, { ReactElement } from 'react';
import Head from 'next/head';
import GlobalStyle from '@theme/GlobalStyle';
import Header from '@organisms/Header';
import ThemeModeProvider from '@theme/themeProvider';

const IndexPage = (): ReactElement => {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>DEVELOG</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeModeProvider>
        <Header currentPage="" />
      </ThemeModeProvider>
    </div>
  );
};

export default IndexPage;
