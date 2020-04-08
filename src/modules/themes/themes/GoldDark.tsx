import { readableColor, modularScale as modularScaleOriginal } from 'polished';

const bg = '#12161c';
const secondary = '#252d38';

const modularScale = (steps: number) => modularScaleOriginal(steps, '16px', 'majorSecond');

export const GoldDark = {
  honeycomb: {
    color: {
      bg,
      primary: '#f0b90b',
      secondary,
      readable: (bgColor: string) => readableColor(bgColor, bg, '#fff'),

      good: '#02c076',
      danger: '#d9304e',

      placeholder: '#999',

      gradient: {
        primary: 'linear-gradient(90deg, #efb80b 0%, #fbda3c 100%)',
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
      normal: 3,
    },

    duration: {
      normal: '150ms',
    },

    tooltip: {
      bg: secondary,
    },
  },
};
