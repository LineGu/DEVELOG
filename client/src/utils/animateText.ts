import { Dispatch, SetStateAction } from 'react';
import { IColorProps } from '@interfaces';
import Theme from '@theme/index';

interface IAnimateProps extends IColorProps {
  textList: string[];
  isMounted: boolean;
  setMargin: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<string>>;
  setOpacity: Dispatch<SetStateAction<string>>;
  setIntro: Dispatch<SetStateAction<string>>;
}

const REPEAT_START_TIMING = 3000;
const TEXT_PERIOD = 4000;

const animateIntroduceText: (props: IAnimateProps) => void = ({
  textList,
  isMounted,
  color,
  setMargin,
  setColor,
  setOpacity,
  setIntro,
}) => {
  let newColor = color;
  let currentListIndex = 1;

  setMargin('1%');
  const setTimingText = setTimeout(() => {
    if (!isMounted) {
      clearTimeout(setTimingText);
      return;
    }
    setMargin('100%');
    setOpacity('0%');
    const hideText = setInterval(() => {
      if (!isMounted) {
        clearInterval(hideText);
        return;
      }
      setMargin('100%');
      setOpacity('0%');
    }, TEXT_PERIOD);
  }, REPEAT_START_TIMING);

  const timerToShow = setInterval(() => {
    if (!isMounted) {
      clearInterval(timerToShow);
      return;
    }
    setMargin('1%');
    newColor = newColor === Theme.BLACK ? Theme.POINT : Theme.BLACK;
    setColor(newColor);
    setOpacity('100%');
    setIntro(textList[currentListIndex]);

    currentListIndex += 1;
    const isOverList = currentListIndex > textList.length - 1;
    currentListIndex = isOverList ? 0 : currentListIndex;
  }, TEXT_PERIOD);
};

export default animateIntroduceText;
