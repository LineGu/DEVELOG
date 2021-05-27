import { IOnClickEditButton } from '@types';
import CurrentInsertion from './CurrentInsertion';

export default abstract class AbstractTextEditor extends CurrentInsertion {
  public onClickEditButton = ({ input, currentCursorIndex, moveCursor }: IOnClickEditButton): string => {
    this.setIndexToInsert(currentCursorIndex);
    this.setIndexToGo(currentCursorIndex);
    const updatedText = this.insertText(input);
    this.moveCursorAfterEdit(moveCursor);

    return updatedText;
  };
}
