import { readableColor, modularScale as modularScaleOriginal } from 'polished';

const modularScale = (steps: number) => modularScaleOriginal(steps, '16px', 'majorSecond');

const readable = {
  normal: (bg: string) => readableColor(bg, '#1e2026', '#ffffff'),
  masked: (bg: string) => readableColor(bg, '#76808f', '#5e6673'),
  disabled: (bg: string) => readableColor(bg, '#aeb4bc', '#aeb4bc'),
} as const;

export const GoldDark = {
  honeycomb: {
    color: {
      bg: {
        normal: '#14151a',
        masked: '#76808f',
        disabled: '#aeb4bc',
      },

      text: {
        normal: readable.normal('black'),
        masked: readable.masked('black'),
        disabled: readable.disabled('black'),
      },

      readable,

      primary: {
        normal: '#f0b90b',
        active: '#f8d12f',
      },

      good: {
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
      modularScale,
      small: modularScale(-2),
      reduced: modularScale(-1),
      normal: modularScale(0),
      increased: modularScale(4),
      large: modularScale(7),
      huge: modularScale(9),
    },

    radius: {
      normal: 4,
    },

    duration: {
      normal: '150ms',
    },
  },
};
