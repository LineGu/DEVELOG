type editType = {
  [index: string]: string;
  h1: string;
  h2: string;
  h3: string;
  bold: string;
  italic: string;
  link: string;
  quote: string;
  code: string;
  checkbox: string;
};

export default abstract class Editor {
  public abstract insertionText: string;

  public stringToInsert: editType = {
    h1: '# ',
    h2: '## ',
    h3: '### ',
    bold: '**텍스트**',
    italic: '_텍스트_',
    link: '[링크텍스트](링크)',
    quote: '> ',
    code: '\n```\nCode\n```\n',
    checkbox: '- [ ] ',
  };

  public abstract editInput(input: string, cursorPosition: number[]): { updatedText: string; cursorToGo: number[] };

  public insertText = (text: string, input: string, indexForInsertion: number): string => {
    const frontPart = input.slice(0, indexForInsertion);
    const backPart = input.slice(indexForInsertion);
    const updatedText = frontPart + text + backPart;
    return updatedText;
  };

  public findSideEdges = (input: string, cursorPosition: number[]): number[] => {
    const currentPoint = cursorPosition[0];
    const frontPart = input.slice(0, currentPoint);
    const backPart = input.slice(currentPoint);
    const frontEdgeIndex = frontPart.lastIndexOf('\n') + 1;
    const backLenOfLine = backPart.indexOf('\n') === -1 ? backPart.length + 1 : backPart.indexOf('\n') + 1;
    const backEdgeIndex = frontPart.length + backLenOfLine;

    return [frontEdgeIndex, backEdgeIndex];
  };

  public setImgString(url: string): void {
    this.stringToInsert.img = `\n![](${url})\n`;
  }

  public setTableString(tableCount: number[]): void {
    const [row, column] = tableCount ?? [-1, -1];
    const rowText = `|${'    |'.repeat(row)}\n|${'----|'.repeat(row)}`;
    const columnText = `${'\n'}${'|'}${'    |'.repeat(row)}`;

    this.stringToInsert.table = `\n\n${rowText}${columnText.repeat(column - 1)}\n\n`;
  }
}
