import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import Header from '@organisms/Header/index';
import GlobalStyle from '@theme/GlobalStyle';
import ThemeModeProvider from '@theme/themeProvider';

type IHeaderTempProps = {
  currentPage: string;
  children?: ReactNode;
};

function HeaderTemp({ currentPage, children }: IHeaderTempProps): ReactElement {
  return (
    <ThemeModeProvider>
      <GlobalStyle />
      <Head>
        <title>DEVELOG</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header currentPage={`${currentPage}`} />
      {children}
    </ThemeModeProvider>
  );
}

export default HeaderTemp;
