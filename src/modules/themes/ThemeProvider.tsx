import React from 'react';
import { ThemeProvider as Provider, DefaultTheme } from 'styled-components';

import { GoldDark } from './GoldDark';
import { GoldLight } from './GoldLight';
import { SeaDark } from './SeaDark';
import { SeaLight } from './SeaLight';

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
