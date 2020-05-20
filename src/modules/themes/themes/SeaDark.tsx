import { GoldDark } from './GoldDark';
import { SeaLight } from './SeaLight';
import { HoneycombThemeType } from './HoneycombThemeType';

export const SeaDark: HoneycombThemeType = {
  ...SeaLight,
  honeycomb: {
    ...SeaLight.honeycomb,
    color: {
      ...SeaLight.honeycomb.color,
      bg: GoldDark.honeycomb.color.bg,
      text: GoldDark.honeycomb.color.text,
    },
  },
};
