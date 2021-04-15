import { Dispatch, SetStateAction } from 'react';
import { IComponentProps } from '@interfaces';

interface ITextInputProps extends IComponentProps {
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>, setText: Dispatch<SetStateAction<string>>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
    setText: Dispatch<SetStateAction<string>>,
    text: string,
  ) => void;
}

export default ITextInputProps;
