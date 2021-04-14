import { Dispatch, SetStateAction } from 'react';

interface IEditTextProps {
  event: React.MouseEvent<SVGElement, MouseEvent>;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  cursorPosition: number[];
}

interface IInsertFrontProps {
  input: string;
  cursorPosition: number[];
  insertText: string;
  setInput: Dispatch<SetStateAction<string>>;
  iconClicked: string;
}

interface IInsertSideProps {
  input: string;
  cursorPosition: number[];
  insertText: string;
  setInput: Dispatch<SetStateAction<string>>;
  iconClicked: string;
}

export const findFrontOfLine = (input: string, cursorPosition: number[]): number => {
  let findingIndex = cursorPosition[0];
  let isFindFront = true;
  while (isFindFront) {
    if (input[findingIndex - 1] === '\n') {
      isFindFront = false;
      break;
    }
    if (findingIndex === 0) {
      break;
    }
    findingIndex -= 1;
  }
  return findingIndex;
};

const findLastOfLine = (input: string, frontIndex: number): number => {
  let isFindLast = true;
  let lastIndex = frontIndex;
  const textTotalLength = input.length;

  while (isFindLast) {
    if (input[lastIndex] === '\n') {
      isFindLast = false;
      break;
    }
    if (lastIndex === textTotalLength) {
      isFindLast = false;
      break;
    }
    lastIndex += 1;
  }
  return lastIndex;
};

const insertTextFront = ({ input, cursorPosition, insertText, setInput }: IInsertFrontProps): number[] => {
  const positionToInsert = findFrontOfLine(input, cursorPosition);

  const textToCheckOverlap = input.slice(positionToInsert, positionToInsert + 4);
  const beforeText = input.slice(0, positionToInsert);

  let afterText = input.slice(positionToInsert);
  let textToInsert = insertText;

  if (insertText.includes('#') && textToCheckOverlap.includes('# ')) {
    const indexOfMarkDownEnd = textToCheckOverlap.indexOf('# ') + 2;
    afterText = afterText.slice(indexOfMarkDownEnd);
  }
  if (insertText.includes('>') && textToCheckOverlap.includes('> ')) {
    const indexOfMarkDownEnd = textToCheckOverlap.indexOf('> ') + 2;
    textToInsert = '';
    afterText = afterText.slice(indexOfMarkDownEnd);
  }

  if (insertText.includes('- [ ]') && textToCheckOverlap.includes('- [ ')) {
    textToInsert = '';
    afterText = afterText.slice(6);
  }

  const newInput = beforeText + textToInsert + afterText;
  const lastIndexOfLine = findLastOfLine(newInput, positionToInsert);
  setInput(newInput);
  return [lastIndexOfLine, lastIndexOfLine];
};

const insertTextSide = ({ input, cursorPosition, insertText, setInput }: IInsertSideProps): number[] => {
  const isSelected = cursorPosition[0] !== cursorPosition[1];
  let textToInsert = insertText;
  let cursorPositionToGo = [0, 0];

  if (isSelected) {
    const [startPosition, endPosition] = cursorPosition;
    let textSelected = input.slice(startPosition, endPosition);
    let beforeText = input.slice(0, startPosition);
    let afterText = input.slice(endPosition);

    switch (textToInsert) {
      case '**텍스트**':
        if (beforeText.slice(-2) === '**' && afterText.slice(0, 2) === '**') {
          beforeText = beforeText.slice(0, -2);
          afterText = afterText.slice(2);
          textToInsert = textSelected;
          cursorPositionToGo = [startPosition - 2, endPosition - 2];
          break;
        }
        if (textSelected.slice(0, 2) === '**' && textSelected.slice(-2) === '**') {
          textToInsert = textSelected.slice(2, -2);
          cursorPositionToGo = [startPosition, endPosition - 4];
          break;
        }
        textToInsert = `**${textSelected}**`;
        cursorPositionToGo = [startPosition, endPosition + 4];
        break;

      case '_텍스트_':
        if (beforeText.slice(-1) === '_' && afterText.slice(0, 1) === '_') {
          beforeText = beforeText.slice(0, -1);
          afterText = afterText.slice(1);
          textToInsert = textSelected;
          cursorPositionToGo = [startPosition - 1, endPosition - 1];
          break;
        }
        if (isSelected && textSelected.slice(0, 1) === '_' && textSelected.slice(-1) === '_') {
          textSelected = textSelected.slice(1, -1);
          textToInsert = textSelected;
          cursorPositionToGo = [startPosition, endPosition - 2];
          break;
        }
        textToInsert = `_${textSelected}_`;
        cursorPositionToGo = [startPosition, endPosition + 2];
        break;

      case '[링크텍스트](링크)':
        textToInsert = `[${textSelected}](링크)`;
        cursorPositionToGo = [endPosition + 3, endPosition + 5];
        break;

      default:
        break;
    }
    const newInput = beforeText + textToInsert + afterText;
    setInput(newInput);
    return cursorPositionToGo;
  }

  const positionToInsert = cursorPosition[0];
  const beforeText = input.slice(0, positionToInsert);
  const afterText = input.slice(positionToInsert);
  const newInput = beforeText + textToInsert + afterText;
  switch (textToInsert) {
    case '**텍스트**':
      cursorPositionToGo = [positionToInsert + 2, positionToInsert + 5];
      break;
    case '_텍스트_':
      cursorPositionToGo = [positionToInsert + 1, positionToInsert + 4];
      break;
    case '[링크텍스트](링크)':
      cursorPositionToGo = [positionToInsert + 1, positionToInsert + 6];
      break;
    case '![]()':
      cursorPositionToGo = [positionToInsert + 5, positionToInsert + 5];
      break;
    default:
      break;
  }
  setInput(newInput);
  return cursorPositionToGo;
};

const insertTable = ({ input, cursorPosition, insertText, setInput, iconClicked }: IInsertSideProps) => {
  const isSelected = cursorPosition[0] !== cursorPosition[1];
  const [startPosition, endPosition] = cursorPosition;
  const textSelected = input.slice(startPosition, endPosition);

  let cursorPositionToGo = [0, 0];
  switch (iconClicked) {
    case 'table':
      setInput(input.slice(0, cursorPosition[1]) + insertText + input.slice(cursorPosition[1]));
      cursorPositionToGo = [cursorPosition[1] + 1, cursorPosition[1] + 1];
      break;

    case 'code':
      if (isSelected) {
        setInput(
          `${input.slice(0, cursorPosition[0])}\n\`\`\`\n${textSelected}\n\`\`\`\n${input.slice(cursorPosition[1])}`,
        );
        cursorPositionToGo = [cursorPosition[0] + 4 + textSelected.length, cursorPosition[0] + 4 + textSelected.length];
        break;
      }
      setInput(input.slice(0, cursorPosition[0]) + insertText + input.slice(cursorPosition[0]));
      cursorPositionToGo = [cursorPosition[0] + 5, cursorPosition[0] + 9];
      break;

    default:
      break;
  }

  return cursorPositionToGo;
};

const editInputText = ({ event, input, setInput, cursorPosition }: IEditTextProps): number[] => {
  const iconClicked = event.currentTarget.className.baseVal;

  let cursorToGo: number[] = [0, 0];

  let insertText = '';
  switch (iconClicked) {
    case 'h1':
      insertText = '# ';
      cursorToGo = insertTextFront({ input, cursorPosition, insertText, setInput, iconClicked });
      break;

    case 'h2':
      insertText = '## ';
      cursorToGo = insertTextFront({ input, cursorPosition, insertText, setInput, iconClicked });
      break;

    case 'h3':
      insertText = '### ';
      cursorToGo = insertTextFront({ input, cursorPosition, insertText, setInput, iconClicked });
      break;

    case 'bold':
      insertText = '**텍스트**';
      cursorToGo = insertTextSide({ input, cursorPosition, insertText, setInput, iconClicked });
      break;

    case 'italic':
      insertText = '_텍스트_';
      cursorToGo = insertTextSide({ input, cursorPosition, insertText, setInput, iconClicked });
      break;

    case 'link':
      insertText = '[링크텍스트](링크)';
      cursorToGo = insertTextSide({ input, cursorPosition, insertText, setInput, iconClicked });
      break;

    case 'img':
      insertText = '![]()';
      cursorToGo = insertTextSide({ input, cursorPosition, insertText, setInput, iconClicked });
      break;

    case 'quote':
      insertText = '> ';
      cursorToGo = insertTextFront({ input, cursorPosition, insertText, setInput, iconClicked });
      break;

    case 'table':
      insertText = '\n\n|    |    |    |\n|----|----|----|\n|    |    |    |\n\n';
      cursorToGo = insertTable({ input, cursorPosition, insertText, setInput, iconClicked });
      break;

    case 'code':
      insertText = '\n```\nCode\n```\n';
      cursorToGo = insertTable({ input, cursorPosition, insertText, setInput, iconClicked });
      break;

    case 'checkbox':
      insertText = '- [ ] ';
      cursorToGo = insertTextFront({ input, cursorPosition, insertText, setInput, iconClicked });
      break;

    default:
      break;
  }
  return cursorToGo;
};

export default editInputText;
