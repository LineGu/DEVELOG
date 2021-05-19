import { Dispatch, SetStateAction } from 'react';
import { ITableProps } from '@interfaces';

interface IInsertSideProps {
  input: string;
  cursorPosition: number[];
  insertText: string;
  setInput: Dispatch<SetStateAction<string>>;
}

const insertTable = ({ input, cursorPosition, insertText, setInput }: IInsertSideProps) => {
  const [, endPosition] = cursorPosition;

  let cursorPositionToGo = [0, 0];

  setInput(input.slice(0, endPosition) + insertText + input.slice(endPosition));
  cursorPositionToGo = [endPosition + 1, endPosition + 1];

  return cursorPositionToGo;
};

const addTable = ({ tableCount, input, setInput, cursorPosition }: ITableProps): number[] => {
  const [row, column] = tableCount ?? [-1, -1];

  const rowText = `|${'    |'.repeat(row)}\n|${'----|'.repeat(row)}`;
  const columnText = `${'\n'}${'|'}${'    |'.repeat(row)}`;

  const insertText = `\n\n${rowText}${columnText.repeat(column - 1)}\n\n`;

  const cursorToGo = insertTable({ input, cursorPosition, insertText, setInput });

  return cursorToGo;
};

export default addTable;
