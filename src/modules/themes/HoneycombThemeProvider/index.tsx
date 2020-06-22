import React, { useMemo } from 'react';
import { ThemeProvider as Provider, DefaultTheme } from 'styled-components';

import { useHoneycombTheme } from './hooks';

export type Variant = 'light' | 'dark' | 'accent';

export type Props = {
  children?: React.ReactNode;
  family?: 'gold' | 'sea';
  variant?: Variant;
  defaultVariant?: 'dark' | 'light';
  localTheme?: Omit<DefaultTheme, 'honeycomb'>;
};

export const HoneycombThemeProvider = ({
  children,
  family,
  variant,
  defaultVariant,
  localTheme,
}: Props) => {
  const honeycombTheme = useHoneycombTheme({
    family,
    variant,
    defaultVariant,
  });

  const theme = useMemo(() => {
    return { ...localTheme, ...honeycombTheme };
  }, [localTheme, honeycombTheme]);

  return <Provider theme={theme}>{children}</Provider>;
};
