import { readableColor, transparentize } from 'polished';

const readable = {
  normal: (bg: string) => readableColor(bg, '#1e2026', '#e6e8ea'),
  masked: (bg: string) => readableColor(bg, '#76808f', '#5e6673'),
  disabled: (bg: string) => readableColor(bg, '#aeb4bc', '#aeb4bc'),
} as const;

const bgNormal = '#1e2026';

export const GoldDark = {
  honeycomb: {
    id: 'GoldDark' as 'GoldDark' | 'GoldLight' | 'GoldAccent' | 'SeaDark' | 'SeaLight',
    name: 'Gold (Dark)',

    color: {
      bg: {
        normal: bgNormal,
        masked: '#14151a',

        tooltip: {
          normal: '#2b2f36',
          accent: '#33373e',
          outer: transparentize(0.5, bgNormal),
        },
      },

      text: {
        normal: readable.normal('black'),
        masked: readable.masked('black'),
        disabled: readable.disabled('black'),
      },

      readable,

      border: '#474d57',

      primary: {
        normal: '#f0b90b',
        active: '#f8d12f',
      },

      secondary: {
        normal: '#2b2f36',
        active: '#f8d12f',
      },

      success: {
        normal: '#02c076',
        active: '#2ed191',
      },

      danger: {
        normal: '#d9304e',
        active: '#fc6e75',
      },

      buy: {
        normal: '#02c076',
        active: '#2ed191',
      },

      sell: {
        normal: '#d9304e',
        active: '#fc6e75',
      },
    },

    size: {
      small: 12,
      reduced: 14,
      normal: 16,
      increased: 24,
      large: 32,
      huge: 40,
    },

    radius: {
      reduced: 4,
      normal: 8,
      increased: 16,
    },

    duration: {
      normal: '150ms',
    },

    shadow: {
      normal: '0px 2px 16px rgba(11, 14, 17, 0.6)',
    },
  },
};
