import { GoldLight } from './GoldLight';
import { HoneycombThemeType } from './HoneycombThemeType';

export const SeaLight: HoneycombThemeType = {
  ...GoldLight,
  honeycomb: {
    ...GoldLight.honeycomb,
    color: {
      ...GoldLight.honeycomb.color,
      primary: {
        normal: '#4653c8',
        active: '#4653c8',
        masked: '#4653c8',
      },
    },
  },
};
