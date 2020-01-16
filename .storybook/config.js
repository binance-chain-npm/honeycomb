import { configure, addDecorator, addParameters } from '@storybook/react';
import withStyledTheme from './themeAddon/decorator';

import { ThemeProvider } from '../src/modules/themes';

addParameters({
  themeSwitch: {
    themes: ThemeProvider.Theme,
    defaultThemeName: 'GoldDark',
  },
});

addDecorator(withStyledTheme);

configure(require.context('../src', true, /\.stories\.tsx$/), module);
