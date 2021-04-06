import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import Header from '@organisms/Header/index';
import GlobalStyle from '@theme/GlobalStyle';
import ThemeModeProvider from '@theme/themeProvider';

interface IHeaderTempProps {
  currentPage: string;
  children?: ReactNode;
  defaultMode: string;
}

function HeaderTemp({ currentPage, children, defaultMode }: IHeaderTempProps): ReactElement {
  return (
    <ThemeModeProvider defaultMode={defaultMode}>
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
