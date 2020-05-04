import React, { useMemo } from 'react';
import { ThemeProvider as Provider, DefaultTheme } from 'styled-components';

import { GoldDark } from '../themes/GoldDark';
import { GoldLight } from '../themes/GoldLight';
import { SeaDark } from '../themes/SeaDark';
import { SeaLight } from '../themes/SeaLight';

export type Props = {
  children?: React.ReactNode;
  family: 'gold' | 'sea';
  variant: 'light' | 'dark';
  localTheme?: Omit<DefaultTheme, 'honeycomb'>;
};

const getHoneycombTheme = ({ family, variant }: Pick<Props, 'family' | 'variant'>) => {
  if (family === 'sea') {
    if (variant === 'dark') return SeaDark;
    if (variant === 'light') return SeaLight;
  }

  if (family === 'gold') {
    if (variant === 'dark') return GoldDark;
    if (variant === 'light') return GoldLight;
  }

  throw new Error(`No Honeycomb theme found with family="${family}" and variant="${variant}"`);
};

export const HoneycombThemeProvider = ({ children, family, variant, localTheme }: Props) => {
  const theme = useMemo(() => {
    const honeycombTheme = getHoneycombTheme({ family, variant });
    return { ...localTheme, ...honeycombTheme };
  }, [family, variant, localTheme]);

  return <Provider theme={theme}>{children}</Provider>;
};
