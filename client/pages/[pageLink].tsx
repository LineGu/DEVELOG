import React, { ReactElement, useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@organisms/Header/index';
import GlobalStyle from '@theme/GlobalStyle';
import ThemeModeProvider from '@theme/themeProvider';

const SomePage = (): ReactElement => {
  const router = useRouter();

  return (
    <ThemeModeProvider>
      <GlobalStyle />
      <Head>
        <title>DEVELOG</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header currentPage={`${router.query.pageLink}`} />
    </ThemeModeProvider>
  );
};

// SomePage.getInitialProps = () => {
//   const theme = Themes.checkMode('DarkMode');
//   console.log(theme);
//   return { theme };
// };+

export default SomePage;
