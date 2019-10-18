import { DefaultTheme } from 'styled-components';

import { GoldDark } from './GoldDark';

const bg = '#fff';

export const GoldLight: DefaultTheme = {
  ...GoldDark,

  color: {
    ...GoldDark.color,
    bg,
    secondary: '#eaecef',
  },
};
