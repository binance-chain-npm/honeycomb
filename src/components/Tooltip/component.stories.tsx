import React from 'react';

import { Sections } from '../../modules/sections';
import { HoneycombThemeProvider } from '../../modules/themes';

import { Tooltip } from './';

export default {
  title: `${Sections.Elements}/Tooltip`,
};

export const Default = () => {
  return (
    <Tooltip content={<Tooltip.Content>heyyyy there</Tooltip.Content>} data-testid="Tooltip">
      Here!
    </Tooltip>
  );
};

export const MixedThemes = () => {
  return (
    <>
      <HoneycombThemeProvider variant="light">
        <Tooltip
          content={<Tooltip.Content>heyyyy there</Tooltip.Content>}
          data-testid="Tooltip1"
          visible
        >
          Here!
        </Tooltip>
      </HoneycombThemeProvider>
      <div style={{ height: '50px' }} />
      <HoneycombThemeProvider variant="dark">
        <Tooltip
          content={<Tooltip.Content>heyyyy there</Tooltip.Content>}
          data-testid="Tooltip2"
          visible
        >
          Here!
        </Tooltip>
      </HoneycombThemeProvider>
    </>
  );
};
