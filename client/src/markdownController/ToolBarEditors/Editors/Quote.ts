import AbstractLineEditor from '../Abstract/LineEditor';

export default class HeadEditor extends AbstractLineEditor {
  protected similarText = ['> '];

  protected textToInsert: string;

  protected indexToInsert: number;

  protected indexToGo: number[];

  constructor() {
    super();
    this.textToInsert = '> ';
    this.indexToInsert = 0;
    this.indexToGo = [0, 0];
  }
}
