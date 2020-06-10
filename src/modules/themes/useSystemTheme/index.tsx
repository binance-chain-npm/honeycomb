import { useState, useEffect } from 'react';

const media = typeof matchMedia !== 'undefined' ? matchMedia('(prefers-color-scheme: dark)') : null;

export const useSystemTheme = (
  { defaultTheme }: { defaultTheme: 'light' | 'dark' } = { defaultTheme: 'light' },
) => {
  const [variant, setVariant] = useState(media ? (media.matches ? 'dark' : 'light') : defaultTheme);

  useEffect(() => {
    if (!media) return;

    setVariant(media.matches ? 'dark' : 'light');

    const listener = ({ matches }: MediaQueryListEventMap['change']) =>
      setVariant(matches ? 'dark' : 'light');
    media.addEventListener('change', listener);

    return () => {
      media.removeEventListener('change', listener);
    };
  }, []);

  return variant;
};
