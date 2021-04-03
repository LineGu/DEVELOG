import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@organisms/Header/index';
import GlobalStyle from '@theme/GlobalStyle';
import ThemeModeProvider from '@theme/themeProvider';
import MovingBox from '@molecules/MovingBox/index';

function SomePage(): ReactElement {
  const router = useRouter();

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
      <Header currentPage={`${router.query.pageLink}`} />
      <MovingBox />
    </ThemeModeProvider>
  );
}

// SomePage.getInitialProps = () => {
//   const theme = Themes.checkMode('DarkMode');
//   console.log(theme);
//   return { theme };
// };+

export default SomePage;
