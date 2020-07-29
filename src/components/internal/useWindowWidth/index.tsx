import { useState, useEffect } from 'react';

export const widths = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
} as const;

const getWidth = () => window.innerWidth;

export const useWindowWidth = () => {
  let [width, setWidth] = useState(getWidth());

  useEffect(() => {
    let timeoutId: number | undefined = undefined;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };

    window.addEventListener('resize', resizeListener);

    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return width;
};
