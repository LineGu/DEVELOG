import AbstractEditor from './Editor';

export default abstract class CurrentInsertion extends AbstractEditor {
  protected abstract indexsToMove: number[];

  protected setIndexToInsert = (currentCursorIndex: number): void => {
    this.indexToInsert = currentCursorIndex;
  };

  protected setIndexToGo = (currentCursorIndex: number): void => {
    this.indexToGo = [this.indexsToMove[0] + currentCursorIndex, this.indexsToMove[1] + currentCursorIndex];
  };
}
