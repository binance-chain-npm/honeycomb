import { DefaultTheme } from 'styled-components';

import { GoldDark } from './GoldDark';
import { SeaLight } from './SeaLight';

export const SeaDark: DefaultTheme = {
  ...SeaLight,
  honeycomb: {
    ...SeaLight.honeycomb,
    color: {
      ...SeaLight.honeycomb.color,
      bg: GoldDark.honeycomb.color.bg,
      secondary: GoldDark.honeycomb.color.secondary,
    },
  },
};
