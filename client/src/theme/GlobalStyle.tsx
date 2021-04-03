import React, { ReactElement } from 'react';

function GlobalStyle(): ReactElement {
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
      }

      @keyframes left {
        0% {
          transform: translate3d(100%, 0, 0);
        }
        50% {
          transform: translate3d(0, 0, 0);
        }
      }
    `}</style>
  );
}
export default GlobalStyle;
