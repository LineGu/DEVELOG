import Editor from './Editor';

export default class FrontInsertEditor extends Editor {
  public insertionText: string;

  public constructor(editType: string) {
    super();
    this.insertionText = this.stringToInsert[editType];
  }

  public editInput = (input: string, cursorPosition: number[]): { updatedText: string; cursorToGo: number[] } => {
    const [frontEdge, backEdge] = this.findSideEdges(input, cursorPosition);
    const updatedText = this.insertText(this.insertionText, input, frontEdge);
    const pointToGo = backEdge + this.insertionText.length - 1;
    const cursorToGo = [pointToGo, pointToGo];
    return { updatedText, cursorToGo };
  };
}
