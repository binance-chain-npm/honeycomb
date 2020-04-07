import React from 'react';
import { ThemeProvider as Provider, DefaultTheme } from 'styled-components';

import { GoldDark } from '../themes/GoldDark';
import { GoldLight } from '../themes/GoldLight';
import { SeaDark } from '../themes/SeaDark';
import { SeaLight } from '../themes/SeaLight';

export type Props = { children?: React.ReactNode; theme: DefaultTheme };

export const Theme = {
  GoldDark,
  GoldLight,
  SeaDark,
  SeaLight,
};

export const ThemeProvider = (props: Props) => (
  <Provider theme={props.theme}>{props.children}</Provider>
);

ThemeProvider.Theme = Theme;
