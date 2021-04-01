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
  BLACK: '#000000',
  HEADER_BACK: '#f1efff',
};

export const DarkMode: ThemeType = {
  HDPC: '1200px',
  PC: '960px',
  TABLET: '768px',
  MOBILE: '480px',
  BASE: '#ffffff',
  POINT: '#c17fce',
  LINK_MODAL: '#d0d0d0',
  BLACK: '#000000',
  HEADER_BACK: '#6D656E',
};

export default Theme;