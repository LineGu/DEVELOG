import { Dispatch, SetStateAction } from 'react';
import { IComponentProps } from '@interfaces';

interface ITextInputProps extends IComponentProps {
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  onDrop?: (event: React.DragEvent<HTMLTextAreaElement>) => void;
  refElem?: React.RefObject<HTMLTextAreaElement>;
  onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onClick?: () => void;
}

export default ITextInputProps;
