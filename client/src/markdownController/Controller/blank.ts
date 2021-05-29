import {
  changeText,
  insertText,
  createTextsByLine,
  applyBlankToMarkdown,
  getBlankIdxsAfterLastText,
  getBlankIdxsBeforeText,
  getBlankIdxsInCodeBox,
  getBlankIdxsAfterTable,
} from '@utils/markdown';

export default class blankController {
  private _enterStr = '\n';

  private _spaceStr = `&nbsp;`;

  protected joinTexts = (TextsByLine: string[]): string => {
    return TextsByLine.join(this._enterStr);
  };

  protected devideTextsByLine = (input: string): string[] => {
    const TextsByLine = createTextsByLine(input);
    return TextsByLine;
  };

  protected applyBlank = (TextsByLine: string[]): string[] => {
    const updatedTextsByLine = TextsByLine.map((text) => applyBlankToMarkdown(text));
    return updatedTextsByLine;
  };

  protected delInvalidBlank = (TextsByLine: string[]): string[] => {
    let updatedTextsByLine: string[] = [...TextsByLine];
    updatedTextsByLine = this._delBlankAfterLastText(updatedTextsByLine);
    updatedTextsByLine = this._delSlashBeforeText(updatedTextsByLine);
    updatedTextsByLine = this._delBlankInCode(updatedTextsByLine);
    updatedTextsByLine = this._delSlashAfterTable(updatedTextsByLine);
    return updatedTextsByLine;
  };

  private _delBlankAfterLastText = (TextsByLine: string[]): string[] => {
    const blankIdxs = getBlankIdxsAfterLastText(TextsByLine);
    return changeText(TextsByLine, blankIdxs, '');
  };

  private _delSlashBeforeText = (TextsByLine: string[]): string[] => {
    const blankIdxsBeforeText = getBlankIdxsBeforeText(TextsByLine);
    return changeText(TextsByLine, blankIdxsBeforeText, this._spaceStr);
  };

  private _delBlankInCode = (TextsByLine: string[]): string[] => {
    const idxsBlankInCodeBox: number[] = getBlankIdxsInCodeBox(TextsByLine);
    return changeText(TextsByLine, idxsBlankInCodeBox, '');
  };

  private _delSlashAfterTable = (TextsByLine: string[]): string[] => {
    const idxsSlashAfterTable: number[] = getBlankIdxsAfterTable(TextsByLine);
    return insertText(TextsByLine, idxsSlashAfterTable, '');
  };
}
