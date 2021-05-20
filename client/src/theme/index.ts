export type ThemeType = { [key: string]: string };

const Theme: ThemeType = {
  HDPC: '1200px',
  PC: '960px',
  TABLET: '768px',
  MOBILE: '480px',
  BASE: '#707070',
  POINT: '#c17fce',
  LINK_MODAL: '#d0d0d0',
  BLACK: '#000000',
  HEADER_BACK: '#f1efff',
};

export const LightMode: ThemeType = {
  HDPC: '1200px',
  PC: '960px',
  TABLET: '768px',
  MOBILE: '480px',
  MIN_WIDTH: '350px',
  BASE: '#707070',
  POINT: '#c17fce',
  LINK_MODAL: '#d0d0d0',
  HOVER_POINT: '#c17fce',
  BLACK: '#000000',
  WHITE: '#ffffff',
  HEADER_BACK: '#ffffff',
  TOGGLE_BACK: '#000000',
  TOGGLE_BTN: '#707070',
  MODE: '#6D656E',
  MODE_MARK: '#FFB33A',
  INTRO: '#000000',
  INTRO_BG: 'https://i.ibb.co/R7zTtyz/background.png',
  CODE_BOX: '#F5F7F8',
  EMPHASIS: '#5A5A5A',
  CODE: `#C0CAD2`,
  SUBMIT_BTN: 'rgb(32, 201, 151)',
  QUOTE_BOX: 'rgb(248, 249, 250)',
  TAG_PLACEHOLDER: '#a2acb4',
  MODAL_EDIT: '#1E1E1E',
  OUT_LINE: '#37628A',
  PREVIEW_BACK: '#fafafa',
  TEXT_SELECT: '#dfdfdf',
};

export const DarkMode: ThemeType = {
  HDPC: '1200px',
  PC: '960px',
  TABLET: '768px',
  MOBILE: '480px',
  MIN_WIDTH: '350px',
  BASE: '#ffffff',
  POINT: '#c17fce',
  LINK_MODAL: '#8E8E8E',
  HOVER_POINT: '#000000',
  BLACK: '#000000',
  WHITE: '#ffffff',
  HEADER_BACK: '#242424',
  TOGGLE_BACK: '#000000',
  TOGGLE_BTN: '#ffffff',
  MODE: '#707070',
  MODE_MARK: '#FFB33A',
  INTRO: '#ffffff',
  INTRO_BG: 'https://i.ibb.co/R7zTtyz/background.png',
  CODE_BOX: '#444444',
  EMPHASIS: '#5A5A5A',
  CODE: `#C0CAD2`,
  SUBMIT_BTN: '#86c975',
  QUOTE_BOX: 'rgb(248, 249, 250)',
  TAG_PLACEHOLDER: '#a2acb4',
  MODAL_EDIT: '#5A5A5A',
  OUT_LINE: '#37628A',
  PREVIEW_BACK: '#222121',
  TEXT_SELECT: '#dfdfdf',
};

export default Theme;
