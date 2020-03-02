import React, { useMemo } from 'react';
import queryString from 'query-string';
import { ThemeProvider } from 'styled-components';
import { makeDecorator, useChannel, useState, useEffect, useParameter } from '@storybook/addons';

import { GlobalStyles } from '../../src/modules/core';
import { Events, PARAM_KEY } from './constants';

export default makeDecorator({
  name: 'withStyledTheme',
  wrapper: (storyFn, context) => {
    const { themes, defaultThemeName } = useParameter(PARAM_KEY, {});

    const urlThemeName = useMemo(() => queryString.parse(location.search).theme, [location.search]);

    const [themeName, setThemeName] = useState(urlThemeName || defaultThemeName);
    const emit = useChannel({ [Events.themeChanged]: ({ themeName }) => setThemeName(themeName) });

    useEffect(() => {
      emit(Events.init);
    }, []);

    return (
      <ThemeProvider theme={themes[themeName]}>
        <GlobalStyles />
        {storyFn(context)}
      </ThemeProvider>
    );
  },
});
