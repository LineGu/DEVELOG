import AbstractTextEditor from '../Abstract/TextEditor';

export default class ItalicEditor extends AbstractTextEditor {
  protected pointStartText = '_';

  protected pointEndText = '_';

  protected textToInsert: string;

  protected indexToInsert: number;

  protected indexToGo: number[];

  protected indexsToMove: number[];

  constructor() {
    super();
    this.textToInsert = '_텍스트_';
    this.indexsToMove = [1, 4];
    this.indexToInsert = 0;
    this.indexToGo = [0, 0];
  }
}
