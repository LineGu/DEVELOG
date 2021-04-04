import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '@theme/themeProvider';
import Theme from '@theme/index';

type ReturnType = {
  margin: string;
  color: string;
  opacity: string;
  intro: string;
};

const useTextLoop = (introList: string[]): ReturnType => {
  useContext(ThemeContext);
  const [margin, setMargin] = useState<string>('100%');
  const [color, setColor] = useState<string>(Theme.POINT);
  const [opacity, setOpacity] = useState<string>('100%');
  const [intro, setIntro] = useState<string>(introList[0]);

  useEffect(() => {
    let mounted = true;
    let newColor = color;
    let i = 1;

    setMargin('1%');
    const timerToSetTiming = setTimeout(() => {
      if (!mounted) {
        clearTimeout(timerToSetTiming);
        return;
      }
      setMargin('100%');
      setOpacity('0%');
      const timerToHide = setInterval(() => {
        if (!mounted) {
          clearInterval(timerToHide);
          return;
        }
        setMargin('100%');
        setOpacity('0%');
      }, 4000);
    }, 3000);

    const timerToShow = setInterval(() => {
      if (!mounted) {
        clearInterval(timerToShow);
        return;
      }
      setMargin('1%');
      newColor = newColor === Theme.BLACK ? Theme.POINT : Theme.BLACK;
      setColor(newColor);
      setOpacity('100%');
      setIntro(introList[i]);
      i += 1;
      i = i > 3 ? 0 : i;
    }, 4000);

    return function cleanUp() {
      mounted = false;
    };
  }, []);

  return { margin, color, opacity, intro };
};

export default useTextLoop;
