import { useState, useEffect } from 'react';
import Theme from '@theme/index';
import { IDynamicStyledProps, IColorProps } from '@interfaces';
import animateIntroduceText from '@utils/animateText';
import useDependencyTheme from './useDependencyTheme';

interface ITextLoopReturn extends IDynamicStyledProps, IColorProps {
  introduce: string;
}

const useTextLoop = (introduceList: string[]): ITextLoopReturn => {
  useDependencyTheme();
  const [margin, setMargin] = useState<string>('100%');
  const [color, setColor] = useState<string>(Theme.POINT);
  const [opacity, setOpacity] = useState<string>('100%');
  const [introduce, setIntro] = useState<string>(introduceList[0]);

  useEffect(() => {
    let isMounted = true;
    const propsOfAnimateFunc = { textList: introduceList, isMounted, color, setMargin, setColor, setOpacity, setIntro };
    animateIntroduceText(propsOfAnimateFunc);
    function cleanUp() {
      isMounted = false;
    }
    return cleanUp;
  }, []);

  return { margin, color, opacity, introduce };
};

export default useTextLoop;
