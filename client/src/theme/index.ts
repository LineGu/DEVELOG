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
};

export const DarkMode: ThemeType = {
  HDPC: '1200px',
  PC: '960px',
  TABLET: '768px',
  MOBILE: '480px',
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
};

export default Theme;
