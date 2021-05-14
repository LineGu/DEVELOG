import { Dispatch, SetStateAction } from 'react';

interface ITableProps {
  tableCount?: number[];
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  cursorPosition: number[];
}

export default ITableProps;
