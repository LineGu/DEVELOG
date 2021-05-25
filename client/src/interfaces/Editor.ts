import React, { SetStateAction, Dispatch } from 'react';
import { IComponentProps, IUploadState } from '@interfaces';

interface IEditComponentProps extends IComponentProps {
  writingAreaProps: {
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    inputAreaElem: React.RefObject<HTMLTextAreaElement>;
    setImageUrl: Dispatch<SetStateAction<string>>;
    setUploadState: Dispatch<SetStateAction<IUploadState>>;
  };
}

export default IEditComponentProps;
