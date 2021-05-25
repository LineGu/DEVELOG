import { SetStateAction, Dispatch } from 'react';
import { IUploadState } from '@interfaces';

export type SetStateString = Dispatch<SetStateAction<string>>;

export type SetStateNum = Dispatch<SetStateAction<number>>;

export type setStateBool = Dispatch<SetStateAction<boolean>>;

export type setStateNumberArr = Dispatch<SetStateAction<number[]>>;

export type SetStateProcess = Dispatch<SetStateAction<IUploadState>>;

export type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;
