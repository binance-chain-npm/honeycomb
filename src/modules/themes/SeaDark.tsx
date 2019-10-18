import { DefaultTheme } from 'styled-components';

import { GoldDark } from './GoldDark';
import { SeaLight } from './SeaLight';

export const SeaDark: DefaultTheme = {
  ...SeaLight,

  color: {
    ...SeaLight.color,
    bg: GoldDark.color.bg,
    secondary: GoldDark.color.secondary,
  },
};
