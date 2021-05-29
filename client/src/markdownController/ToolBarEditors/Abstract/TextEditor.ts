import { IOnClickEditButton } from '@types';
import CurrentInsertion from './CurrentInsertion';

export default abstract class AbstractTextEditor extends CurrentInsertion {
  protected abstract pointStartText: string;

  protected abstract pointEndText: string;

  public onClickEditButton = ({ input, cursorPosition, moveCursor }: IOnClickEditButton): string => {
    const currentCursorIndex = cursorPosition[0];
    const isSelected = cursorPosition[0] !== cursorPosition[1];
    this.setIndexToInsert(currentCursorIndex);
    this.setIndexToGo(currentCursorIndex);
    let updatedInput = input;
    if (isSelected) {
      updatedInput = this._insertSelectedText({ input, cursorPosition, moveCursor });
    } else {
      updatedInput = this.insertText(input);
    }
    this.moveCursorAfterEdit(moveCursor);
    return updatedInput;
  };

  private _isInSameTag = (input: string, frontCursor: number, backCursor: number): boolean => {
    return (
      input.slice(frontCursor - this.pointStartText.length, frontCursor).includes(this.pointStartText) &&
      input.slice(backCursor, backCursor + this.pointEndText.length).includes(this.pointEndText)
    );
  };

  private _insertTextBetweenIdxs = (input: string, frontIdx: number, backIdx: number, textToInsert: string): string => {
    const updatedInput = input.slice(0, frontIdx) + textToInsert + input.slice(backIdx);
    return updatedInput;
  };

  private _insertSelectedText = ({ input, cursorPosition, moveCursor }: IOnClickEditButton): string => {
    const [frontCursor, backCursor] = cursorPosition;
    const selectText = input.slice(frontCursor, backCursor);

    let updatedInput = input;
    if (this._isInSameTag(input, frontCursor, backCursor)) {
      const sameTagIdxs = [frontCursor - this.pointStartText.length, backCursor + this.pointEndText.length];
      updatedInput = this._insertTextBetweenIdxs(input, sameTagIdxs[0], sameTagIdxs[1], selectText);
      this.indexToGo = [sameTagIdxs[0], sameTagIdxs[1]];
    } else {
      const textToInsert = this.pointStartText + selectText + this.pointEndText;
      updatedInput = this._insertTextBetweenIdxs(input, frontCursor, backCursor, textToInsert);
      const idxOfSelectedText = frontCursor + this.pointStartText.length;
      const idxToGo = [idxOfSelectedText, idxOfSelectedText + selectText.length];
      this.indexToGo = idxToGo;
    }
    return updatedInput;
  };
}
