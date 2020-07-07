import { GoldDark } from './GoldDark';
import { HoneycombThemeType } from './HoneycombThemeType';

export const GoldLight: HoneycombThemeType = {
  ...GoldDark,
  honeycomb: {
    ...GoldDark.honeycomb,

    id: 'GoldLight',
    name: 'Gold (Light)',

    color: {
      ...GoldDark.honeycomb.color,
      bg: {
        normal: '#ffffff',
        masked: '#f5f5f5',

        tooltip: {
          ...GoldDark.honeycomb.color.bg.tooltip,
          normal: '#ffffff',
          accent: '#f5f5f5',
        },
      },

      border: '#e6e8ea',

      primary: {
        ...GoldDark.honeycomb.color.primary,
      },

      secondary: {
        ...GoldDark.honeycomb.color.secondary,
        normal: '#f5f5f5',
      },

      text: {
        normal: GoldDark.honeycomb.color.readable.normal('white'),
        masked: GoldDark.honeycomb.color.readable.masked('white'),
        disabled: GoldDark.honeycomb.color.readable.disabled('white'),
        placeholder: GoldDark.honeycomb.color.readable.placeholder('white'),
      },
    },

    shadow: {
      normal: '0px 2px 16px rgba(11, 14, 17, 0.04)',
    },
  },
};
