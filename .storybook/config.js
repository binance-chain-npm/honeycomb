import { configure, addDecorator, addParameters } from '@storybook/react';
import withStyledTheme from './themeAddon/decorator';

import { GoldDark, GoldLight, SeaDark, SeaLight } from '../src/modules/themes';

addParameters({
  themeSwitch: {
    themes: { GoldDark, GoldLight, SeaDark, SeaLight },
    defaultThemeName: 'GoldDark',
  },
});

addDecorator(withStyledTheme);

configure(require.context('../src', true, /\.stories\.tsx$/), module);
configure(require.context('../cypress/stories', true, /\.stories\.tsx$/), module);
