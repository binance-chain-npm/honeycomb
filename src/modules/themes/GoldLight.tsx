import { DefaultTheme } from 'styled-components';

import { GoldDark } from './GoldDark';

const bg = '#fff';

export const GoldLight: DefaultTheme = {
  ...GoldDark,
  honeycomb: {
    ...GoldDark.honeycomb,
    color: {
      ...GoldDark.honeycomb.color,
      bg,
      secondary: '#eaecef',
    },
  },
};
