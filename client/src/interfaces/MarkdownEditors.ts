import BoldEditor from '@utils/markdownEditor/Editors/Bold';
import CheckBoxEditor from '@utils/markdownEditor/Editors/CheckBox';
import CodeEditor from '@utils/markdownEditor/Editors/Code';
import HeadEditor from '@utils/markdownEditor/Editors/Head';
import ImgEditor from '@utils/markdownEditor/Editors/Img';
import ItalicEditor from '@utils/markdownEditor/Editors/Italic';
import LinkEditor from '@utils/markdownEditor/Editors/Link';
import QuoteEditor from '@utils/markdownEditor/Editors/Quote';

interface EditorType {
  h1: HeadEditor;
  h2: HeadEditor;
  h3: HeadEditor;
  bold: BoldEditor;
  italic: ItalicEditor;
  link: LinkEditor;
  code: CodeEditor;
  checkbox: CheckBoxEditor;
  quote: QuoteEditor;
  img: ImgEditor;
  [index: string]:
    | HeadEditor
    | BoldEditor
    | ItalicEditor
    | LinkEditor
    | CodeEditor
    | CheckBoxEditor
    | QuoteEditor
    | ImgEditor;
}

export default EditorType;
