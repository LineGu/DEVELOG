import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import useDependencyTheme from '@hook/useDependencyTheme';
import { atelierCaveLight, a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface ICodeBoxProps {
  value: string;
  language: string;
  className: string;
}

interface IPreviewProps {
  input: string;
}

const StyledPreviewBox = styled.div`
  width: 50%;

  .preview {
    height: 79vh;
    font-size: 1.2rem;
    padding: 10vh 6vw;
    outline: none;
    overflow-y: scroll;
    pointer-events: auto;
    color: ${() => Theme.INTRO};

    h1 {
      padding-bottom: 1rem;
      border-bottom: 1px solid ${() => Theme.LINK_MODAL};
    }
    table {
      border-collapse: collapse;
      font-size: 1rem;
      & th {
        border: 1px solid ${() => Theme.BASE};
        border-bottom: 2px solid ${() => Theme.INTRO};
        padding: 0.8rem 1.4rem;
      }
      & td {
        border: 1px solid ${() => Theme.BASE};
        border-top: none;
        padding: 0.8rem;
      }
    }
    a {
      color: ${() => Theme.MODE_MARK};
      text-decoration: none;
    }
    blockquote {
      margin: 0;
      padding: 0.2em;
      padding-left: 3em;
      line-height: 2rem;
      border-left: 0.4em ${() => Theme.POINT} solid;
      background-color: ${() => Theme.QUOTE_BOX};
    }
    hr {
      width: 100%;
      margin: 2rem 0;
      color: ${() => Theme.BASE};
      opacity: 60%;
    }
    p > code {
      font-size: 1.3rem;
      font-weight: 800;
      color: ${() => Theme.CODE};
      background-color: ${() => Theme.EMPHASIS};
      border-radius: 0.3em;
      padding: 0.15rem 0.5rem;
      margin: 0 0.2rem 0 0.5rem;
    }
    img {
      width: 25em;
      height: 15em;
    }
    & > *::selection {
      background-color: inherit;
    }

    @media (max-width: ${() => Theme.TABLET}) {
      display: none;
    }
  }
`;

const CodeBox = ({ value, language }: ICodeBoxProps): ReactElement => {
  const { mode } = useDependencyTheme();
  const style = mode === 'LightMode' ? atelierCaveLight : a11yDark;
  return (
    <SyntaxHighlighter
      language={language ?? ''}
      style={style}
      customStyle={{
        lineHeight: '1.4em',
        fontSize: '1.2em',
        borderRadius: '0.5em',
        backgroundColor: Theme.CODE_BOX,
      }}
    >
      {value ?? ''}
    </SyntaxHighlighter>
  );
};

function MarkdownPreview({ input }: IPreviewProps): ReactElement {
  return (
    <StyledPreviewBox>
      <ReactMarkdown
        plugins={[[gfm, { tableCellPadding: 'true' }]]}
        source={input}
        className="preview"
        renderers={{ code: CodeBox }}
      />
    </StyledPreviewBox>
  );
}

export default MarkdownPreview;
