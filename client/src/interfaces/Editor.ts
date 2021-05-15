import React, { SetStateAction, Dispatch } from 'react';
import { IComponentProps, IUploadState } from '@interfaces';

interface IEditComponentProps extends IComponentProps {
  propsAboutTextComponent: {
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    setCursorPosition: Dispatch<SetStateAction<number[]>>;
    findCursorPoint: (element: HTMLTextAreaElement) => number[];
    inputAreaElem: React.RefObject<HTMLTextAreaElement>;
    infoOfCursorToGo: React.MutableRefObject<(boolean | number[])[]>;
    cursorPosition: number[];
    setImageUrl: Dispatch<SetStateAction<string>>;
    setUploadState: Dispatch<SetStateAction<IUploadState>>;
  };
}

export default IEditComponentProps;
