import BoldEditor from '@utils/markdown/markdownEditor/Editors/Bold';
import CheckBoxEditor from '@utils/markdown/markdownEditor/Editors/CheckBox';
import CodeEditor from '@utils/markdown/markdownEditor/Editors/Code';
import HeadEditor from '@utils/markdown/markdownEditor/Editors/Head';
import ImgEditor from '@utils/markdown/markdownEditor/Editors/Img';
import ItalicEditor from '@utils/markdown/markdownEditor/Editors/Italic';
import LinkEditor from '@utils/markdown/markdownEditor/Editors/Link';
import QuoteEditor from '@utils/markdown/markdownEditor/Editors/Quote';

export declare interface EditorType {
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
