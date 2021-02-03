import { useState, useEffect } from 'react';

export const SIZES = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 1280,
  xl: 1920,
} as const;

const getWidth = () => (typeof window === 'undefined' ? 0 : window.innerWidth);
const getHeight = () => (typeof window === 'undefined' ? 0 : window.innerHeight);

export const useWindowSize = () => {
  const [width, setWidth] = useState(getWidth());
  const [height, setHeight] = useState(getHeight());

  useEffect(() => {
    let timeoutId: number | undefined = undefined;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setWidth(getWidth());
        setHeight(getHeight());
      }, 150);
    };

    window.addEventListener('resize', resizeListener);

    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return { width, height };
};
