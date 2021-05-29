import { IFadeFunc, IFadeInOutFunc } from '@types';
import FADE from '@constants/Fade';

const fadeText: IFadeFunc = (props) => {
  const { isMounted, setMargin, setOpacity, timer, method } = props;
  const numListToApply =
    method === FADE.OUT ? [FADE.MAXIMUM_GAP_BOXES, FADE.NUM_HIDE_TEXT] : [FADE.MINIMUM_GAP_BOXES, FADE.NUM_SHOW_TEXT];
  if (!isMounted) {
    clearTimeout(timer);
    return;
  }
  setMargin(numListToApply[0]);
  setOpacity(numListToApply[1]);
};

export const fadeOutTextBox: IFadeInOutFunc = (props) => {
  const setTimingText = setTimeout(() => {
    fadeText({ ...props, timer: setTimingText, method: FADE.OUT });
    const hideText = setInterval(() => {
      fadeText({ ...props, timer: hideText, method: FADE.OUT });
    }, FADE.TEXT_PERIOD);
  }, FADE.REPEAT_START_TIMING);
};

export const fadeInTextBox: IFadeInOutFunc = (props) => {
  const timerToShow = setInterval(() => {
    fadeText({ ...props, timer: timerToShow, method: FADE.IN });
  }, FADE.TEXT_PERIOD);
};
