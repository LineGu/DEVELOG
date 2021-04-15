export interface IOnKeyboardFunc {
  (event: React.KeyboardEvent<HTMLTextAreaElement>): void;
}

export interface IOnChangeFunc {
  (event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

export interface IOnChangeFileFunc {
  (event: React.ChangeEvent<HTMLInputElement>): void;
}

export interface IOnClickElemFun {
  (event: React.MouseEvent<HTMLTextAreaElement>): void;
}

export interface IOnClickSvgFun {
  (event: React.MouseEvent<SVGElement, MouseEvent>): void;
}
