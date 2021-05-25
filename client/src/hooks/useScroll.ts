import { useCallback, useRef, useEffect, useState } from 'react';

interface IUseScrollProps {
  position: number;
}

const useScroll: () => IUseScrollProps = () => {
  const initialHeight = 1000;
  const [scroll, setScroll] = useState<number>(0);
  const screenHeight = useRef<number>(initialHeight);

  const notifyLocation = useCallback(() => {
    setScroll(document.documentElement.scrollTop);
  }, [scroll]);

  const applyWindowHeight = () => {
    screenHeight.current = window.innerHeight;
  };

  useEffect(() => {
    document.addEventListener('scroll', notifyLocation);
    document.addEventListener('resize', applyWindowHeight);
    applyWindowHeight();
    return () => {
      document.removeEventListener('scroll', notifyLocation);
      document.removeEventListener('resize', applyWindowHeight);
    };
  }, []);

  const percentagePosition = (scroll / screenHeight.current) * 100;

  return { position: percentagePosition };
};

export default useScroll;
