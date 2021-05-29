import { IOnClickEditButton } from '@types';
import AbstractEditor from './Editor';

export default abstract class AbstractLineEditor extends AbstractEditor {
  protected abstract similarText: string[];

  protected idxsToDel: number[] = [0, 0];

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

  public onClickEditButton = ({ input, cursorPosition, moveCursor }: IOnClickEditButton): string => {
    const currentCursorIndex = cursorPosition[0];
    this.setIndexToInsert(currentCursorIndex, input);
    this.setIndexToGo(currentCursorIndex, input);

    let updatedText = input;

    if (this.hasSimilarText(input)) updatedText = this.delSimilarText(updatedText);
    updatedText = this.insertText(updatedText);
    this.moveCursorAfterEdit(moveCursor);

    return updatedText;
  };

  protected delSimilarText = (input: string): string => {
    const updatedInput = input.slice(0, this.idxsToDel[0]) + input.slice(this.idxsToDel[1]);
    const indexToGo = this.indexToGo[0] - (this.idxsToDel[1] - this.idxsToDel[0]);
    this.indexToGo = [indexToGo, indexToGo];
    return updatedInput;
  };

  protected hasSimilarText = (input: string): boolean => {
    const frontPartToInsert = input.slice(this.indexToInsert, this.indexToInsert + 6);
    let hasSimilar = false;
    this.similarText.forEach((text) => {
      if (frontPartToInsert.includes(text)) {
        hasSimilar = true;
        this.idxsToDel = [this.indexToInsert, this.indexToInsert + text.length];
      }
    });
    return hasSimilar;
  };
}
