import { IOnClickEditButton } from '@interfaces';
import CurrentInsertion from '../Abstract/CurrentInsertion';

interface ITableEditProps extends IOnClickEditButton {
  tableCount: number[];
}

export default class TableEditor extends CurrentInsertion {
  protected textToInsert: string;

  protected indexToInsert: number;

  protected indexToGo: number[];

  protected indexsToMove: number[];

  constructor() {
    super();
    this.textToInsert = '';
    this.indexsToMove = [3, 3];
    this.indexToInsert = 0;
    this.indexToGo = [0, 0];
  }

  protected setTextToInsert(tableCount: number[]): void {
    const [row, column] = tableCount ?? [-1, -1];
    const rowText = `|${'    |'.repeat(row)}\n|${'----|'.repeat(row)}`;
    const columnText = `${'\n'}${'|'}${'    |'.repeat(row)}`;
    this.textToInsert = `\n\n${rowText}${columnText.repeat(column - 1)}\n\n`;
  }

  public onClickEditButton = ({ input, currentCursorIndex, moveCursor, tableCount }: ITableEditProps): string => {
    this.setTextToInsert(tableCount);
    this.setIndexToInsert(currentCursorIndex);
    this.setIndexToGo(currentCursorIndex);
    const updatedText = this.insertText(input);
    this.moveCursorAfterEdit(moveCursor);

    return updatedText;
  };
}
