import { useState, useEffect } from 'react';

export const sizes = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
} as const;

const getWidth = () => (typeof window === 'undefined' ? 0 : window.innerWidth);
const getHeight = () => (typeof window === 'undefined' ? 0 : window.innerHeight);

export const useWindowSize = () => {
  let [width, setWidth] = useState(getWidth());
  let [height, setHeight] = useState(getHeight());

  useEffect(() => {
    let timeoutId: number | undefined = undefined;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidth(getWidth());
        setHeight(getHeight());
      }, 150);
    };

    window.addEventListener('resize', resizeListener);

    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return { width, height };
};
