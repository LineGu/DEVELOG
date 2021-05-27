import React, { useState, ReactElement, createContext, ReactNode, useEffect } from 'react';
import { IThemeContextType } from '@types';
import Theme, { LightMode, DarkMode, ThemeType } from '../../constants/Theme';

interface IProviderProps {
  children: ReactNode;
  defaultMode: string;
}

export const ThemeContext = createContext<IThemeContextType>({});

function ThemeModeProvider({ children, defaultMode }: IProviderProps): ReactElement {
  const [mode, setMode] = useState(defaultMode);

  useEffect(() => {
    const initMode = window.localStorage.getItem('theme') ?? 'LightMode';
    setMode(initMode);
  }, []);

  const changeMode = () => {
    const newMode = mode === 'LightMode' ? 'DarkMode' : 'LightMode';
    window.localStorage.setItem('theme', `${newMode}`);
    setMode(newMode);
  };

  const newTheme: ThemeType = mode === 'LightMode' ? LightMode : DarkMode;

  Object.keys(newTheme).forEach((key): void => {
    Theme[key] = newTheme[key];
  });
  return <ThemeContext.Provider value={{ mode, changeMode }}>{children}</ThemeContext.Provider>;
}

export default ThemeModeProvider;
