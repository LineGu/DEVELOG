import { useContext } from 'react';
import { ThemeContext } from 'src/components/common/themeProvider';
import { IThemeContextType } from '@types';

const useDependencyTheme: () => IThemeContextType = () => {
  const { mode, changeMode } = useContext(ThemeContext);
  return { mode, changeMode };
};

export default useDependencyTheme;
