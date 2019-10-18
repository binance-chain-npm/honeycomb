import { DefaultTheme } from 'styled-components';

import { GoldLight } from './GoldLight';

export const SeaLight: DefaultTheme = {
  ...GoldLight,

  color: {
    ...GoldLight.color,
    primary: '#4653c8',
  },
};
