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

addParameters({ docs: { page: null } });
