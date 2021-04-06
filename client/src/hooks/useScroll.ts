import { useCallback, useRef, useEffect, useState } from 'react';

interface IUseScrollProps {
  position: number;
}

const useScroll: () => IUseScrollProps = () => {
  const [scroll, setScroll] = useState<number>(0);
  const screenHeight = useRef<number>(1000);

  const notifyLocation = useCallback(() => {
    setScroll(document.documentElement.scrollTop);
  }, [scroll]);

  useEffect(() => {
    document.addEventListener('scroll', notifyLocation);
    screenHeight.current = window.innerHeight;
    return () => document.removeEventListener('scroll', notifyLocation);
  }, []);

  const percentagePosition = (scroll / screenHeight.current) * 100;

  return { position: percentagePosition };
};

export default useScroll;
