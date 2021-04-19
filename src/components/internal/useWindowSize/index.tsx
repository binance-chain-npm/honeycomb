import { useEffect, useMemo, useState } from 'react';

export const SIZES = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 1280,
  xl: 1920,
} as const;

const getWidth = () => (typeof window === 'undefined' ? 0 : window.innerWidth);

export const useWindowSize = () => {
  const [width, setWidth] = useState(getWidth());

  const isSm = useMemo(() => width < SIZES.md, [width]);
  const isMd = useMemo(() => width < SIZES.lg, [width]);

  useEffect(() => {
    let timeoutId: number | undefined = undefined;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setWidth(getWidth());
      }, 150);
    };

    window.addEventListener('resize', resizeListener);

    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return { isSm, isMd };
};
