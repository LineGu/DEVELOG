import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveLight, a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import gfm from 'remark-gfm';
import useDependencyTheme from '@hook/useDependencyTheme';
import Theme from '@theme/index';
import ThemeButton from '@molecules/ThemeBtn/index';

const StyledPostBox = styled.div`
  display: flex;
  position: relative;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal;
  .editArea {
    width: 50%;
    height: 100vh;
    & > hr {
      position: absolute;
      top: 13vh;
      left: 3vw;
      width: 9vw;
      border: 4px solid ${() => Theme.EMPHASIS};
      padding-bottm: 300px;
    }
  }
  .preview {
    width: 50%;
    height: 100vh;
    font-size: 1.2rem;
    padding: 10vh 6vw;
    outline: none;
    overflow-y: scroll;
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

    @media (max-width: ${() => Theme.TABLET}) {
      display: none;
    }
  }
`;

const StyledMarkdownArea = styled.textarea`
  width: 100%;
  height: 100vh;
  padding-left: 3vw;
  font-size: 1.4rem;

  background-color: ${() => Theme.HEADER_BACK};
  color: ${() => Theme.INTRO};
  border: none;

  outline: none;
  resize: none;
  @media (max-width: ${() => Theme.TABLET}) {
    width: 100%;
    border: none;
  }
`;

const TextAreaForTitle = styled.textarea`
  width: 100%;
  font-size: 3.5em;
  font-weight: 700;
  padding: 5vh 0 0 3vw;
  border: none;
  outline: none;
  resize: none;
  &::placeholder {
    color: #a2acb4;
  }
`;

const TextAreaForTag = styled.textarea`
  width: 100%;
  font-size: 1.8em;
  font-weight: 400;
  padding: 2vh 0 0 3vw;
  border: none;
  outline: none;
  resize: none;
  &::placeholder {
    color: #a2acb4;
  }
`;

const StyledThemeButton = styled(ThemeButton)`
  bottom: 7vh;
`;

interface ICodeBoxProps {
  value: string;
  language: string;
  className: string;
}

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

function PostBox(): ReactElement {
  const [input, setInput] = useState('');
  const { changeMode } = useDependencyTheme();
  return (
    <StyledPostBox>
      <div className="editArea">
        <TextAreaForTitle placeholder="제목을 입력하세요" />
        <hr />
        <TextAreaForTag placeholder="태그를 추가하세요" />
        <StyledMarkdownArea
          placeholder="이야기를 적어보세요.."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
      <ReactMarkdown
        plugins={[[gfm, { tableCellPadding: 'true' }]]}
        source={input}
        className="preview"
        renderers={{ code: CodeBox }}
      />
      <StyledThemeButton onClick={changeMode} />
    </StyledPostBox>
  );
}

export default PostBox;
