import { useState, useEffect } from 'react';

const media = typeof matchMedia !== 'undefined' ? matchMedia('(prefers-color-scheme: dark)') : null;

export const useSystemTheme = (
  { defaultTheme }: { defaultTheme: 'light' | 'dark' } = { defaultTheme: 'light' },
) => {
  const [variant, setVariant] = useState(media ? (media.matches ? 'dark' : 'light') : defaultTheme);

  useEffect(() => {
    if (!media) return;

    setVariant(media.matches ? 'dark' : 'light');

    if (!media.addEventListener) {
      // Some browser (e.g. Safari) do not support `media.addEventListener`.
      const id = setInterval(() => setVariant(media.matches ? 'dark' : 'light'), 10000);
      return () => clearInterval(id);
    }

    const listener = ({ matches }: MediaQueryListEventMap['change']) =>
      setVariant(matches ? 'dark' : 'light');
    media.addEventListener('change', listener);

    return () => {
      media.removeEventListener('change', listener);
    };
  }, []);

  return variant;
};
