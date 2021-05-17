import { SetStateAction, Dispatch } from 'react';
import { IUploadState } from '@interfaces';

export type SetStateString = Dispatch<SetStateAction<string>>;

export type setStateBool = Dispatch<SetStateAction<boolean>>;

export type SetStateProcess = Dispatch<SetStateAction<IUploadState>>;

export type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;