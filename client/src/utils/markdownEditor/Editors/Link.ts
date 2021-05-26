import AbstractTextEditor from '../Abstract/TextEditor';

export default class LinkEditor extends AbstractTextEditor {
  protected textToInsert: string;

  protected indexToInsert: number;

  protected indexToGo: number[];

  protected indexsToMove: number[];

  constructor() {
    super();
    this.textToInsert = '[링크텍스트](링크)';
    this.indexsToMove = [1, 6];
    this.indexToInsert = 0;
    this.indexToGo = [0, 0];
  }
}
