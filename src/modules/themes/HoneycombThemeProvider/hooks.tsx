import { useMemo } from 'react';
import { useTheme, DefaultTheme } from 'styled-components';

import { SeaDark } from '../themes/SeaDark';
import { SeaLight } from '../themes/SeaLight';
import { GoldDark } from '../themes/GoldDark';
import { GoldLight } from '../themes/GoldLight';
import { GoldAccent } from '../themes/GoldAccent';
import { useSystemTheme } from '../useSystemTheme';

const useParentTheme = () => useTheme() as DefaultTheme | undefined;

const useParentFamily = () => {
  const parentTheme = useParentTheme();
  return useMemo(() => {
    if (!parentTheme) return undefined;
    if (/^Sea/.test(parentTheme.honeycomb.id)) return 'sea';
    if (/^Gold/.test(parentTheme.honeycomb.id)) return 'gold';
    throw new Error("Could not determine parent theme's family");
  }, [parentTheme]);
};

const useParentVariant = () => {
  const parentTheme = useTheme();
  return useMemo(() => {
    if (!parentTheme) return undefined;
    if (/Light$/.test(parentTheme.honeycomb.id)) return 'light';
    if (/Dark$/.test(parentTheme.honeycomb.id)) return 'dark';
    if (/Accent$/.test(parentTheme.honeycomb.id)) return 'accent';
    throw new Error("Could not determine parent theme's variant");
  }, [parentTheme]);
};

export const useHoneycombTheme = ({
  family: familyParam,
  variant: variantParam,
  defaultVariant,
}: {
  family?: 'gold' | 'sea';
  variant?: 'light' | 'dark' | 'accent';
  defaultVariant?: 'light' | 'dark';
}) => {
  const parentTheme = useParentTheme();
  const parentFamily = useParentFamily();
  const parentVariant = useParentVariant();
  const systemVariant = useSystemTheme({
    defaultTheme: defaultVariant ?? 'light',
  });

  return useMemo(() => {
    const family = familyParam ?? parentFamily ?? 'gold';
    const variant = (() => {
      if (variantParam) return variantParam;
      if (defaultVariant) return systemVariant;
      if (parentVariant) return parentVariant;
      return systemVariant ?? 'light;';
    })();

    if (family === 'sea') {
      if (variant === 'dark') return SeaDark;
      if (variant === 'light') return SeaLight;
      if (variant === 'accent') return parentTheme ?? SeaLight;
    }

    if (family === 'gold') {
      if (variant === 'dark') return GoldDark;
      if (variant === 'light') return GoldLight;

      if (variant === 'accent') {
        if (parentVariant === 'dark') {
          return GoldDark;
        }

        return GoldAccent;
      }
    }

    throw new Error(`No Honeycomb theme found with family="${family}" and variant="${variant}"`);
  }, [parentTheme, familyParam, parentFamily, parentVariant, variantParam, systemVariant]);
};
