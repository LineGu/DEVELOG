import React, { useState, ReactElement, createContext, ReactNode, useEffect } from 'react';
import Theme, { LightMode, DarkMode, ThemeType } from './index';

type themeContextType = {
  mode?: string;
  changeMode?: () => void;
};

type providerPropsType = {
  children: ReactNode;
};

export const ThemeContext = createContext<themeContextType>({});

function ThemeModeProvider({ children }: providerPropsType): ReactElement {
  const defaultMode = 'LightMode';
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