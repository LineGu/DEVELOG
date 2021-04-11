import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveLight, a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import gfm from 'remark-gfm';
import useDependencyTheme from '@hook/useDependencyTheme';
import Theme from '@theme/index';
import ThemeButton from '@molecules/ThemeBtn/index';
import EditButtonBox from '@molecules/EditButtonBox/index';
import Button from '@atoms/Button/index';

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
    height: 79vh;
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
  height: 68vh;
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
  background-color: ${() => Theme.HEADER_BACK};
  &::placeholder {
    color: #a2acb4;
  }
`;

const TextAreaForTag = styled.input`
  font-size: 1.5em;
  font-weight: 400;
  border: none;
  outline: none;
  resize: none;
  margin-left: 0.4rem;
  padding-bottom: 0.7rem;
  background-color: ${() => Theme.HEADER_BACK};
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

const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-beetween;
  margin: 1.2rem 0 1.2rem 2rem;
`;

const StyledTagUnit = styled.div`
  height: 1.7rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 3rem 0.7rem 0.5rem;
  color: ${() => Theme.MODE_MARK};

  &:hover {
    opacity: 60%;
    cursor: pointer;
  }
`;

const StyledButtonBox = styled.div`
  position: absolute;
  right: 42%;
  bottom: 2rem;
  .save {
  }
  .submit {
    background-color: ${() => Theme.SUBMIT_BTN};
  }
`;

const StyledButton = styled(Button)`
  margin-right: 0.8em;
`;

const findCursorPoint = (element: EventTarget): number => {
  const cursorPoint = element.selectionStart;
  return cursorPoint;
};

const findFrontOfLine = (string: string, cursorPosition: number): number => {
  let findingIndex = cursorPosition;
  let isFindFront = true;
  while (isFindFront) {
    if (string[findingIndex] === '\n') {
      isFindFront = false;
      findingIndex += 1;
      break;
    }
    if (findingIndex === 0) {
      break;
    }
    findingIndex -= 1;
  }
  return findingIndex;
};

function PostBox(): ReactElement {
  const [input, setInput] = useState('');
  const [title, setTitle] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [cursorPosition, setCursorPosition] = useState(0);
  const { changeMode } = useDependencyTheme();
  return (
    <StyledPostBox>
      <div className="editArea">
        <TextAreaForTitle
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <hr />
        <StyledTagContainer>
          {tagList.map((tag, index) => (
            <StyledTagUnit
              key={index}
              onClick={() => {
                const tagIndex = index;
                const tagListCopied: string[] = [...tagList];
                tagListCopied.splice(tagIndex, 1);
                setTagList(tagListCopied);
              }}
            >
              {tag}
            </StyledTagUnit>
          ))}
          <TextAreaForTag
            placeholder="태그를 추가하세요"
            value={tagInput}
            onChange={(event) => {
              const newTag = event.target.value;
              if (newTag[0] !== '#') return;
              setTagInput(newTag);
            }}
            onKeyDown={(event) => {
              if ((event.key === ' ' || event.key === 'Enter') && tagInput[0] === '#') {
                const tagListCopied: string[] = [...tagList];
                tagListCopied.push(tagInput.slice(1));
                setTagList(tagListCopied);
                setTagInput('');
              }
            }}
          />
        </StyledTagContainer>

        <EditButtonBox
          onClick={(event) => {
            const iconClicked = event.currentTarget.className.baseVal;
            const positionToInsert = findFrontOfLine(input, cursorPosition);
            let insertText = '';
            switch (iconClicked) {
              case 'h1':
                insertText = '# ';
                break;

              case 'h2':
                insertText = '## ';
                break;

              case 'h3':
                insertText = '### ';
                break;

              case 'bold':
                insertText = '**텍스트**';
                break;

              case 'italic':
                insertText = '_텍스트_';
                break;

              case 'quote':
                insertText = '> ';
                break;

              default:
                break;
            }
            const newInput = input.slice(0, positionToInsert) + insertText + input.slice(positionToInsert);
            setInput(newInput);
          }}
        />
        <StyledMarkdownArea
          className="textInput"
          placeholder="이야기를 적어보세요.."
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onClick={(event) => setCursorPosition(findCursorPoint(event.target))}
          onKeyUp={(event) => {
            const cursorFinder = setTimeout(() => setCursorPosition(findCursorPoint(event.target)), 400);
            event.target.addEventListener('keyup', () => clearTimeout(cursorFinder));
          }}
        />
      </div>
      <ReactMarkdown
        plugins={[[gfm, { tableCellPadding: 'true' }]]}
        source={title === '' ? input : `# ${title}\n${input}`}
        className="preview"
        renderers={{ code: CodeBox }}
      />
      <StyledThemeButton onClick={changeMode} />
      <StyledButtonBox>
        <StyledButton className="save">임시저장</StyledButton>
        <StyledButton className="submit">등록</StyledButton>
      </StyledButtonBox>
    </StyledPostBox>
  );
}

export default PostBox;
