import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from '@theme/themeProvider';

function GlobalStyle(): ReactElement {
  const { mode } = useContext(ThemeContext);

  return (
    <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans KR';
        background-color: ${mode === 'DarkMode' ? '#242424' : '#ffffff'};
      }
    `}</style>
  );
}
export default GlobalStyle;
