import AbstractLineEditor from '../Abstract/LineEditor';

export default class HeadEditor extends AbstractLineEditor {
  protected similarText = ['# ', '## ', '### '];

  protected textToInsert: string;

  protected indexToInsert: number;

  protected indexToGo: number[];

  constructor(Priority: number) {
    super();
    this.textToInsert = `${'#'.repeat(Priority)} `;
    this.indexToInsert = 0;
    this.indexToGo = [0, 0];
  }
}
