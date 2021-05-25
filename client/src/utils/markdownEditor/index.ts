import FrontInsertEditor from './FrontInsertEditor';
import CurrentInsertEditor from './CurrentInsertEditor';
import ImgEditor from './ImgEditor';

interface IEditTextProps {
  event?: React.MouseEvent<SVGElement, MouseEvent>;
  input: string;
  cursorPosition: number[];
  tableCount?: number[];
}

interface IResultOfEditor {
  updatedText: string;
  cursorToGo: number[];
}

type editorType = {
  [editorName: string]: FrontInsertEditor | CurrentInsertEditor;
};

const Editors: editorType = {
  h1Editor: new FrontInsertEditor('h1'),
  h2Editor: new FrontInsertEditor('h2'),
  h3Editor: new FrontInsertEditor('h3'),
  quoteEditor: new FrontInsertEditor('quote'),
  checkboxEditor: new FrontInsertEditor('checkbox'),
  boldEditor: new CurrentInsertEditor('bold'),
  italicEditor: new CurrentInsertEditor('italic'),
  linkEditor: new CurrentInsertEditor('link'),
  codeEditor: new CurrentInsertEditor('code'),
  tableEditor: new CurrentInsertEditor('table'),
  imgEditor: new ImgEditor('img'),
};

const editByButton = (props: IEditTextProps): IResultOfEditor => {
  const { input, event, cursorPosition, tableCount } = props;
  const editType = event?.currentTarget.id ?? 'img';
  const editorName = `${editType}Editor`;
  const editInputFunc = Editors[editorName].editInput;

  if (editType === 'table') {
    const tableEditor = Editors.tableEditor as CurrentInsertEditor;
    tableEditor.setTableText(tableCount ?? [0, 0]);
  }

  const { updatedText, cursorToGo } = editInputFunc(input, cursorPosition);

  return { updatedText, cursorToGo };
};

export default editByButton;
