import React, { SetStateAction, Dispatch } from 'react';
import { IComponentProps, IUploadState } from '@interfaces';

interface IEditComponentProps extends IComponentProps {
  editButtonProps: {
    inputAreaElem: React.RefObject<HTMLTextAreaElement>;
    setUploadState: React.Dispatch<React.SetStateAction<IUploadState>>;
    moveCursor: (positionToGo: number[]) => void;
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
  };
}

export default IEditComponentProps;
