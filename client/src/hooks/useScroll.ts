import { useCallback, useRef, useEffect, useState } from 'react';

const useScroll: () => { position: number } = () => {
  const [scroll, setScroll] = useState<number>(0);
  const screenHeight = useRef<number>(1000);
  const notifyLocation = useCallback(() => {
    setScroll(document.documentElement.scrollTop);
  }, [scroll]);

  useEffect(() => {
    // document.body.scrollTo(SCROLL_PATH_X, scrollRef.current);
    document.addEventListener('scroll', notifyLocation);
    screenHeight.current = window.innerHeight;
    return () => document.removeEventListener('scroll', notifyLocation);
  }, []);

  return { position: (scroll / screenHeight.current) * 100 };
};

export default useScroll;
