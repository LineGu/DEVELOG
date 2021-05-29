import AbstractTextEditor from '../Abstract/TextEditor';

export default class BoldEditor extends AbstractTextEditor {
  protected pointStartText = '**';

  protected pointEndText = '**';

  protected textToInsert: string;

  protected indexToInsert: number;

  protected indexToGo: number[];

  protected indexsToMove: number[];

  constructor() {
    super();
    this.textToInsert = '**텍스트**';
    this.indexsToMove = [2, 5];
    this.indexToInsert = 0;
    this.indexToGo = [0, 0];
  }
}
