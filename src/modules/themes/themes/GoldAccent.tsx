import { GoldLight } from './GoldLight';
import { HoneycombThemeType } from './HoneycombThemeType';

export const GoldAccent: HoneycombThemeType = {
  ...GoldLight,
  honeycomb: {
    ...GoldLight.honeycomb,

    id: 'GoldAccent',
    name: 'Gold (Accent)',

    color: {
      ...GoldLight.honeycomb.color,
      bg: {
        ...GoldLight.honeycomb.color.bg,
        normal: GoldLight.honeycomb.color.primary.normal,
        masked: GoldLight.honeycomb.color.primary.normal,

        tooltip: {
          ...GoldLight.honeycomb.color.bg.tooltip,
          normal: '#ffffff',
          accent: '#f5f5f5',
        },
      },

      border: '#e6e8ea',

      primary: {
        ...GoldLight.honeycomb.color.primary,
        normal: '#f5f5f5',
      },

      secondary: {
        ...GoldLight.honeycomb.color.secondary,
        normal: GoldLight.honeycomb.color.primary.normal,
      },
    },
  },
};
