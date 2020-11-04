import React from 'react';

import { Sections } from '../../modules/sections';
import { HoneycombThemeProvider } from '../../modules/themes';

import { Tooltip } from './';

export default {
  title: `${Sections.Elements}/Tooltip`,
};

export const Default = () => {
  return (
    <Tooltip content="Some tooltip content..." data-testid="tooltip">
      <Tooltip.DefaultTarget>Tooltip</Tooltip.DefaultTarget>
    </Tooltip>
  );
};

export const MixedThemes = () => {
  return (
    <>
      <HoneycombThemeProvider variant="light">
        <Tooltip content="Light theme." visible arrow={true}>
          Tooltip
        </Tooltip>
      </HoneycombThemeProvider>
      <div style={{ height: '4em' }} />
      <HoneycombThemeProvider variant="dark">
        <Tooltip content="Dark theme." visible arrow={true}>
          Tooltip
        </Tooltip>
      </HoneycombThemeProvider>
      <div style={{ height: '4em' }} />
      <HoneycombThemeProvider variant="light">
        <Tooltip content="Light accent theme." variant="accent" visible arrow={true}>
          Tooltip
        </Tooltip>
      </HoneycombThemeProvider>
      <div style={{ height: '4em' }} />
      <HoneycombThemeProvider variant="dark">
        <Tooltip content="Dark accent theme." variant="accent" visible arrow={true}>
          Tooltip
        </Tooltip>
      </HoneycombThemeProvider>
    </>
  );
};
