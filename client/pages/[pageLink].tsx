import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@organisms/Header/index';
import GlobalStyle from '@theme/GlobalStyle';

const SomePage = (): ReactElement => {
  const router = useRouter();
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>DEVELOG</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header currentPage={`${router.query.pageLink}`} />
    </>
  );
};

export default SomePage;
