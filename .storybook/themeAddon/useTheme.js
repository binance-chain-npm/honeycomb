import { useMemo, useCallback } from 'react';
import { useParameter, useAddonState, useChannel } from '@storybook/api';

import { PARAM_KEY, ADDON_ID, Events } from './constants';

export const useTheme = () => {
  const { themes, defaultThemeName } = useParameter(PARAM_KEY, {});
  const [themeName, setThemeName] = useAddonState(ADDON_ID, defaultThemeName);
  const emit = useChannel({
    [Events.init]: () => emit(Events.themeChanged, { themeName }),
  });

  const changeTheme = useCallback(
    (themeName) => {
      setThemeName(themeName);
      emit(Events.themeChanged, { themeName });
    },
    [setThemeName, emit],
  );

  return useMemo(() => ({ themes, themeName, changeTheme }), [themes, themeName, changeTheme]);
};
