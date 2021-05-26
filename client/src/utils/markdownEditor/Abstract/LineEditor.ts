import { IOnClickEditButton } from '@interfaces';
import AbstractEditor from './Editor';

export default abstract class AbstractLineEditor extends AbstractEditor {
  protected setIndexToInsert = (currentCursorIndex: number, input: string): void => {
    const frontPart = input.slice(0, currentCursorIndex);
    this.indexToInsert = frontPart.lastIndexOf('\n') + 1;
  };

  protected setIndexToGo = (currentCursorIndex: number, input: string): void => {
    const backPart = input.slice(currentCursorIndex);
    const isLastLine = backPart.indexOf('\n') === -1;
    const backLenOfLine = isLastLine ? backPart.length : backPart.indexOf('\n');
    const backmostIndex = currentCursorIndex + backLenOfLine + this.textToInsert.length;
    this.indexToGo = [backmostIndex, backmostIndex];
  };

  public onClickEditButton = ({ input, currentCursorIndex, moveCursor }: IOnClickEditButton): string => {
    this.setIndexToInsert(currentCursorIndex, input);
    this.setIndexToGo(currentCursorIndex, input);
    const updatedText = this.insertText(input);
    this.moveCursorAfterEdit(moveCursor);

    return updatedText;
  };
}
