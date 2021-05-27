export default abstract class AbstractCursorController {
  protected abstract indexToInsert: number;

  protected abstract indexToGo: number[];

  protected abstract setIndexToInsert(currentCursorIndex: number, input?: string): void;

  public moveCursorAfterEdit = (moveCursor: (positionToGo: number[]) => void): void => {
    moveCursor(this.indexToGo);
  };
}
