import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '@theme/themeProvider';
import Theme from '@theme/index';

interface IReturnType {
  margin: string;
  color: string;
  opacity: string;
  introduce: string;
}

const useTextLoop = (introduceList: string[]): IReturnType => {
  useContext(ThemeContext);
  const [margin, setMargin] = useState<string>('100%');
  const [color, setColor] = useState<string>(Theme.POINT);
  const [opacity, setOpacity] = useState<string>('100%');
  const [introduce, setIntro] = useState<string>(introduceList[0]);

  useEffect(() => {
    let mounted = true;
    let newColor = color;
    let currentListIndex = 1;

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
      setIntro(introduceList[currentListIndex]);

      currentListIndex += 1;
      const isOverList = currentListIndex > introduceList.length - 1;
      currentListIndex = isOverList ? 0 : currentListIndex;
    }, 4000);

    return function cleanUp() {
      mounted = false;
    };
  }, []);

  return { margin, color, opacity, introduce };
};

export default useTextLoop;
