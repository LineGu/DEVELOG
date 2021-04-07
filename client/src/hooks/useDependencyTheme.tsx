import { useContext } from 'react';
import { ThemeContext } from '@theme/themeProvider';
import { IThemeContextType } from '@interfaces';

const useDependencyTheme: () => IThemeContextType = () => {
  const { mode, changeMode } = useContext(ThemeContext);
  return { mode, changeMode };
};

export default useDependencyTheme;
