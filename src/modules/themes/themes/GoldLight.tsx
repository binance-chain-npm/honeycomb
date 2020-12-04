import { transparentize } from 'polished';

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
          normal: '#ffffff',
          accent: '#f5f5f5',
          outer: transparentize(0.5, '#0b0e11'),
        },

        input: {
          normal: '#f5f5f5',
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
        primary: GoldDark.honeycomb.color.readable.primary('white'),
        masked: GoldDark.honeycomb.color.readable.masked('white'),
        disabled: GoldDark.honeycomb.color.readable.disabled('white'),
        placeholder: GoldDark.honeycomb.color.readable.placeholder('white'),
      },
    },

    shadow: {
      normal: '0px 2px 8px rgba(11, 14, 17, 0.16)',
      box: {
        normal: '0px 0px 16px rgba(11, 14, 17, 0.08)',
        increased: '0px 0px 16px rgba(11, 14, 17, 0.04)',
      },
    },
  },
};
