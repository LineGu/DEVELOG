import React, { SetStateAction, Dispatch } from 'react';
import { IComponentProps, IUploadState } from '@interfaces';
import { IOnKeyboardFunc } from '@eventInterfaces';

interface IEditComponentProps extends IComponentProps {
  writingAreaProps: {
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    updateCusorByClick: () => void;
    updateCusorByKeyboard: IOnKeyboardFunc;
    inputAreaElem: React.RefObject<HTMLTextAreaElement>;
    setImageUrl: Dispatch<SetStateAction<string>>;
    setUploadState: Dispatch<SetStateAction<IUploadState>>;
  };
}

export default IEditComponentProps;
