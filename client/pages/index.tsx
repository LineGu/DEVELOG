import React, { ReactElement } from 'react';
import Head from 'next/head';
import GlobalStyle from '@theme/GlobalStyle';
import Header from '@organisms/Header';

const IndexPage = (): ReactElement => {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>DEVELOG</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header currentPage="" />
    </div>
  );
};

export default IndexPage;
