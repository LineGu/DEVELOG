import Editor from './Editor';

type positionToMoveObj = {
  [type: string]: number[];
  bold: number[];
  italic: number[];
  link: number[];
  code: number[];
};

export default class CurrentInsertEditor extends Editor {
  public insertionText: string;

  public editType: string;

  public constructor(editType: string) {
    super();
    this.insertionText = this.stringToInsert[editType];
    this.editType = editType;
  }

  public positionToMove: positionToMoveObj = {
    bold: [2, 5],
    italic: [1, 4],
    link: [1, 6],
    code: [5, 9],
    table: [3, 3],
  };

  public editInput = (input: string, cursorPosition: number[]): { updatedText: string; cursorToGo: number[] } => {
    const currentPositon = cursorPosition[0];
    const updatedText = this.insertText(this.insertionText, input, currentPositon);
    const [firstPoint, secondPoint] = this.positionToMove[this.editType];
    const cursorToGo = [firstPoint + currentPositon, secondPoint + currentPositon];
    return { updatedText, cursorToGo };
  };

  public setTableText = (tableCount: number[]): void => {
    this.setTableString(tableCount);
    this.insertionText = this.stringToInsert.table;
  };
}
