import { configure, addDecorator, addParameters } from '@storybook/react';
import withStyledTheme from './themeAddon/decorator';

import { HoneycombTheme } from '../src/modules/themes';

addParameters({
  themeSwitch: {
    themes: HoneycombTheme,
    defaultThemeName: 'GoldDark',
  },
});

addDecorator(withStyledTheme);

configure(require.context('../src', true, /\.stories\.tsx$/), module);
