import { readableColor, transparentize } from 'polished';

const readable = {
  normal: (bg: string) => readableColor(bg, '#1e2026', '#ffffff'),
  masked: (bg: string) => readableColor(bg, '#76808f', '#5e6673'),
  disabled: (bg: string) => readableColor(bg, '#aeb4bc', '#aeb4bc'),
} as const;

const bgNormal = '#0b0e11';

export const GoldDark = {
  honeycomb: {
    color: {
      bg: {
        normal: bgNormal,
        masked: '#14151a',
        disabled: '#2b2f36',

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
        normal: '#474d57',
        active: '#f8d12f',
      },

      success: {
        normal: '#02c076',
        active: '#2ed191',
      },

      danger: {
        normal: '#d9304e',
        active: '#f84960',
      },

      buy: {
        normal: '#02c076',
        active: '#2ed191',
      },

      sell: {
        normal: '#f84960',
        active: '#fc6e75',
      },
    },

    size: {
      small: 12,
      reduced: 14,
      normal: 16,
      increased: 22,
      large: 32,
      huge: 46,
    },

    radius: {
      reduced: 2,
      normal: 4,
    },

    duration: {
      normal: '150ms',
    },

    shadow: {
      normal:
        'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    },
  },
};
