import { Dispatch, SetStateAction } from 'react';

interface IPostInputProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

export default IPostInputProps;
