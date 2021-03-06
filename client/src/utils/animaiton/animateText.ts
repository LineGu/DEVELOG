import Theme from '@constants/Theme';
import { fadeInTextBox, fadeOutTextBox } from '@utils/animaiton/fadeText';
import { IAnimateTextFunc, IChangeOrderFunc } from '@types';

const TEXT_PERIOD = 4000;
const MINIMUM_GAP_BOXES = '1%';

const changeNextOrder: IChangeOrderFunc = ({ isMounted, color, textList, setColor, setIntro }) => {
  let currentListIndex = 1;
  let newColor = color;
  const timerToChange = setInterval(() => {
    if (!isMounted) {
      clearInterval(timerToChange);
      return;
    }
    newColor = newColor === Theme.BLACK ? Theme.POINT : Theme.BLACK;
    setColor(newColor);
    setIntro(textList[currentListIndex]);
    currentListIndex += 1;
    const isOverList = currentListIndex > textList.length - 1;
    currentListIndex = isOverList ? 0 : currentListIndex;
  }, TEXT_PERIOD);
};

const animateIntroduceText: IAnimateTextFunc = (props) => {
  const { textList, isMounted, color, setMargin, setColor, setOpacity, setIntro } = props;
  setMargin(MINIMUM_GAP_BOXES);

  fadeOutTextBox({ isMounted, setMargin, setOpacity });
  fadeInTextBox({ isMounted, setMargin, setOpacity });
  changeNextOrder({ isMounted, color, textList, setColor, setIntro });
};

export default animateIntroduceText;
