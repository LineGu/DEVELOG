import { Dispatch, SetStateAction } from 'react';

interface IFadeInOutProps {
  isMounted: boolean;
  setMargin: Dispatch<SetStateAction<string>>;
  setOpacity: Dispatch<SetStateAction<string>>;
}

interface IFadeProps extends IFadeInOutProps {
  timer: NodeJS.Timeout;
  method: string;
}

interface IFadeFunc {
  (props: IFadeProps): void;
}

interface IFadeInOutFunc {
  (props: IFadeInOutProps): void;
}

const REPEAT_START_TIMING = 3000;
const TEXT_PERIOD = 4000;
const MINIMUM_GAP_BOXES = '1%';
const MAXIMUM_GAP_BOXES = '100%';
const NUM_HIDE_TEXT = '0%';
const NUM_SHOW_TEXT = '100%';

const fadeText: IFadeFunc = (props) => {
  const { isMounted, setMargin, setOpacity, timer, method } = props;
  const numListToApply = method === 'OUT' ? [MAXIMUM_GAP_BOXES, NUM_HIDE_TEXT] : [MINIMUM_GAP_BOXES, NUM_SHOW_TEXT];
  if (!isMounted) {
    clearTimeout(timer);
    return;
  }
  setMargin(numListToApply[0]);
  setOpacity(numListToApply[1]);
};

export const fadeOutTextBox: IFadeInOutFunc = (props) => {
  const setTimingText = setTimeout(() => {
    fadeText({ ...props, timer: setTimingText, method: 'OUT' });
    const hideText = setInterval(() => {
      fadeText({ ...props, timer: hideText, method: 'OUT' });
    }, TEXT_PERIOD);
  }, REPEAT_START_TIMING);
};

export const fadeInTextBox: IFadeInOutFunc = (props) => {
  const timerToShow = setInterval(() => {
    fadeText({ ...props, timer: timerToShow, method: 'IN' });
  }, TEXT_PERIOD);
};
