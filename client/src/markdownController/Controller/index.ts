import blankController from './blank';

export default class Controller extends blankController {
  public applyBlankToMarkdown = (input: string): string => {
    const textsByLine: string[] = this.devideTextsByLine(input);
    let updatedTexts: string[] = this.applyBlank(textsByLine);
    updatedTexts = this.delInvalidBlank(updatedTexts);

    return this.joinTexts(updatedTexts);
  };
}
