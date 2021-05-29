import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import GlobalStyle from '@components/common/GlobalStyle/GlobalStyle';
import ThemeModeProvider from '@components/common/ThemeProvider/ThemeProvider';
import { IPagePorps } from '@types';

interface IBaseTemplateProps extends IPagePorps {
  children: ReactNode;
  title: string;
}

function PageBase({ children, title, mode }: IBaseTemplateProps): ReactElement {
  return (
    <ThemeModeProvider defaultMode={mode}>
      <GlobalStyle />
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet" />
      </Head>
      {children}
    </ThemeModeProvider>
  );
}

export default PageBase;
