/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState, ReactNode, ReactElement } from 'react';

type Props = {
  children: ReactNode;
};

type WindowWidth = {
  width: number;
};

const initContext = { width: 1920 };

export const WidthContext = createContext<WindowWidth>(initContext);

function WidthProvider({ children }: Props): ReactElement {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const ChangeWidth = (): void => {
    setWidth(window.innerWidth);
  };
  window.addEventListener('resize', ChangeWidth);

  return <WidthContext.Provider value={{ width }}>{children}</WidthContext.Provider>;
}

export default WidthProvider;
