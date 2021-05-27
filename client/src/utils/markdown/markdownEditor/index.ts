import { EditorType } from '@types';
import BoldEditor from './Editors/Bold';
import CheckBoxEditor from './Editors/CheckBox';
import CodeEditor from './Editors/Code';
import HeadEditor from './Editors/Head';
import ImgEditor from './Editors/Img';
import ItalicEditor from './Editors/Italic';
import LinkEditor from './Editors/Link';
import QuoteEditor from './Editors/Quote';
import TableEditor from './Editors/Table';

export const Editors: EditorType = {
  h1: new HeadEditor(1),
  h2: new HeadEditor(2),
  h3: new HeadEditor(3),
  bold: new BoldEditor(),
  italic: new ItalicEditor(),
  link: new LinkEditor(),
  code: new CodeEditor(),
  checkbox: new CheckBoxEditor(),
  quote: new QuoteEditor(),
  img: new ImgEditor(),
};

export const tableEditor = new TableEditor();
