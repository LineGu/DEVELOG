interface IOnClickEditButton {
  input: string;
  currentCursorIndex: number;
  moveCursor: (positionToGo: number[]) => void;
}

export default IOnClickEditButton;
