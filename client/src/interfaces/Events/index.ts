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

export interface IOnClickDivElemFunc {
  (event: React.MouseEvent<HTMLDivElement>): void;
}

export interface IOnClickSvgFun {
  (event: React.MouseEvent<SVGElement, MouseEvent>): void;
}

export interface IOnClickFunc {
  (event: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

export interface IOnHoverDivFunc {
  (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

export interface IOnDragEventFunc {
  (event: React.DragEvent<HTMLElement>): void;
}
