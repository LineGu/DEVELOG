import { IOnClickEditButton } from '@types';
import AbstractCursorController from './CursorController';

export default abstract class AbstractEditor extends AbstractCursorController {
  protected abstract textToInsert: string;

  public abstract onClickEditButton({ input, cursorPosition, moveCursor }: IOnClickEditButton): string;

  protected insertText = (input: string): string => {
    const frontPart = input.slice(0, this.indexToInsert);
    const backPart = input.slice(this.indexToInsert);

    const updatedText = frontPart + this.textToInsert + backPart;
    return updatedText;
  };
}
