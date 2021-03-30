import React, { ReactElement } from 'react';
import Head from 'next/head';
import Header from '../components/UI/organisms/Header/index';

const IndexPage = (): ReactElement => {
  return (
    <div>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>
      <Head>
        <title>DEVELOG</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header currentTag="PORTFOLIO" />
    </div>
  );
};

export default IndexPage;
