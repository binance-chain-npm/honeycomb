import { readableColor, transparentize } from 'polished';

const readable = {
  normal: (bg: string) => readableColor(bg, '#1e2026', '#e6e8ea'),
  primary: (bg: string) => readableColor(bg, '#d0980b', '#d0980b'),
  masked: (bg: string) => readableColor(bg, '#76808f', '#76808f'),
  disabled: (bg: string) => readableColor(bg, '#aeb4bc', '#aeb4bc'),
  placeholder: (bg: string) => readableColor(bg, '#aeb4bc', '#5e6673'),
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
          normal: '#1e2026',
          accent: '#33373e',
          outer: transparentize(0.2, '#0b0e11'),
        },

        input: {
          normal: '#2b2f36',
        },
      },

      text: {
        normal: readable.normal('black'),
        primary: readable.primary('black'),
        masked: readable.masked('black'),
        disabled: readable.disabled('black'),
        placeholder: readable.disabled('black'),
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

      warning: {
        normal: '#f0b90b',
        active: '#f8d12f',
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
      micro: 4,
      tiny: 8,
      small: 12,
      reduced: 14,
      normal: 16,
      increased: 24,
      large: 32,
      huge: 40,
      giant: 80,
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

    zIndexes: {
      normal: 0,
      modals: 500,
    },
  },
};
