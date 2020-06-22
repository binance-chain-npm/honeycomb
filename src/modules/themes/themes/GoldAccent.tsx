import { GoldDark } from './GoldDark';
import { HoneycombThemeType } from './HoneycombThemeType';

export const GoldAccent: HoneycombThemeType = {
  ...GoldDark,
  honeycomb: {
    ...GoldDark.honeycomb,

    id: 'GoldAccent',
    name: 'Gold (Accent)',

    color: {
      ...GoldDark.honeycomb.color,
      bg: {
        normal: GoldDark.honeycomb.color.primary.normal,
        masked: '#fafafa',
        disabled: '#f5f5f5',

        tooltip: {
          ...GoldDark.honeycomb.color.bg.tooltip,
          normal: '#ffffff',
          accent: '#f5f5f5',
        },
      },

      border: '#e6e8ea',

      primary: {
        ...GoldDark.honeycomb.color.primary,
        normal: '#fff',
      },

      secondary: {
        ...GoldDark.honeycomb.color.secondary,
        normal: '#f5f5f5',
      },

      text: {
        normal: GoldDark.honeycomb.color.readable.normal('white'),
        masked: GoldDark.honeycomb.color.readable.masked('white'),
        disabled: GoldDark.honeycomb.color.readable.disabled('white'),
      },
    },
  },
};
