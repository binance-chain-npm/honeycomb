import { readableColor, transparentize } from 'polished';

const readable = {
  normal: (bg: string) => readableColor(bg, '#1e2026', '#e6e8ea', false),
  primary: (bg: string) => readableColor(bg, '#d0980b', '#d0980b', false),
  masked: (bg: string) => readableColor(bg, '#76808f', '#76808f', false),
  disabled: (bg: string) => readableColor(bg, '#aeb4bc', '#5e6673', false),
  placeholder: (bg: string) => readableColor(bg, '#aeb4bc', '#5e6673', false),
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
          accent: '#2b2f36',
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

      border: '#2e323a',

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
      normal: '0px 2px 8px rgba(11, 14, 17, 1)',
      box: {
        normal: '0px 0px 16px rgba(11, 14, 17, 1)',
        increased: '0px 0px 16px rgba(11, 14, 17, 0.24)',
      },
    },

    zIndexes: {
      normal: 0,
      tooltips: 600,
      modals: 500,
      drawers: 400,
    },
  },
};
