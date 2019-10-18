import { DefaultTheme } from 'styled-components';
import { readableColor, modularScale, stripUnit } from 'polished';

const bg = '#12161c';

const scale: DefaultTheme['size']['scale'] = (steps, base) =>
  modularScale(steps, base, 'majorSecond');

export const GoldDark: DefaultTheme = {
  color: {
    bg,
    primary: '#f0b90b',
    secondary: '#252d38',
    readable: (bgColor) => readableColor(bgColor, bg, '#fff'),

    placeholder: '#999',

    gradient: {
      primary: 'linear-gradient(90deg, #efb80b 0%, #fbda3c 100%)',
    },
  },

  size: {
    touchable: 44,
    touchableSwitch: 44 * (5 / 8),
    scale,
  },

  radius: {
    normal: 3,
  },

  fontSize: {
    tiny: 16 * stripUnit(scale(-2)),
    small: 16 * stripUnit(scale(-1)),
    normal: 16 * stripUnit(scale(0)),
  },

  duration: {
    normal: '150ms',
  },
};
