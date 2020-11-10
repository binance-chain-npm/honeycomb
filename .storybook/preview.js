import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withThemesProvider } from 'storybook-styled-components-theme-selector';

import { HoneycombTheme } from '../src/modules/themes';
import { GlobalStyles } from '../src/modules/core';

addDecorator(
  withThemesProvider({
    children: <GlobalStyles />,
    themes: Object.values(HoneycombTheme).map((it) => ({
      ...it,
      id: it.honeycomb.id,
      name: it.honeycomb.name,
    })),
  }),
);

const customViewports = {
  small: {
    name: 'Small Device',
    styles: {
      width: '375px',
      height: '768px',
    },
  },
  medium: {
    name: 'Medium Device',
    styles: {
      width: '768px',
      height: '1080px',
    },
  },
  large: {
    name: 'Large Device',
    styles: {
      width: '1280px',
      height: '1920px',
    },
  },
};

addParameters({
  docs: { page: null },
  viewport: {
    viewports: customViewports,
  },
});
