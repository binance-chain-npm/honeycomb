import { DefaultTheme } from 'styled-components';

import { GoldLight } from './GoldLight';

export const SeaLight: DefaultTheme = {
  ...GoldLight,
  honeycomb: {
    ...GoldLight.honeycomb,
    color: {
      ...GoldLight.honeycomb.color,
      primary: {
        normal: '#4653c8',
        active: '#4653c8',
      },
    },
  },
};
