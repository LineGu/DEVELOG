import AbstractTextEditor from '../Abstract/TextEditor';

export default class CodeEditor extends AbstractTextEditor {
  protected textToInsert: string;

  protected indexToInsert: number;

  protected indexToGo: number[];

  protected indexsToMove: number[];

  constructor() {
    super();
    this.textToInsert = '\n```\nCode\n```\n';
    this.indexsToMove = [5, 9];
    this.indexToInsert = 0;
    this.indexToGo = [0, 0];
  }
}
