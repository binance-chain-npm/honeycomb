import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Sections } from '../../modules/sections';
import { HoneycombThemeProvider } from '../../modules/themes';

import { Tooltip } from './';

export default {
  component: Tooltip,
  title: `${Sections.Elements}/Tooltip`,
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Default: Story = (args) => (
  <Tooltip {...args} content="Some tooltip content..." data-testid="tooltip">
    <Tooltip.DefaultTarget>Tooltip</Tooltip.DefaultTarget>
  </Tooltip>
);
Default.parameters = {
  controls: {
    disabled: false,
  },
};
Default.argTypes = {
  'data-testid': { table: { disable: true } },
  content: { table: { disable: true } },
  trigger: { table: { disable: true } },
  arrow: {
    control: {
      type: 'boolean',
    },
  },
  padding: {
    defaultValue: 'small',
  },
  radius: {
    defaultValue: 'reduced',
  },
  shape: {
    defaultValue: 'fill',
  },
  variant: {
    defaultValue: 'normal',
  },
};

export const MixedThemes = () => {
  return (
    <>
      <HoneycombThemeProvider variant="light">
        <Tooltip content="Light theme." visible arrow={true} shape="fit">
          Tooltip
        </Tooltip>
      </HoneycombThemeProvider>
      <div style={{ height: '4em' }} />
      <HoneycombThemeProvider variant="dark">
        <Tooltip content="Dark theme." visible arrow={true} shape="fit">
          Tooltip
        </Tooltip>
      </HoneycombThemeProvider>
      <div style={{ height: '4em' }} />
      <HoneycombThemeProvider variant="light">
        <Tooltip content="Light accent theme." variant="accent" visible arrow={true} shape="fit">
          Tooltip
        </Tooltip>
      </HoneycombThemeProvider>
      <div style={{ height: '4em' }} />
      <HoneycombThemeProvider variant="dark">
        <Tooltip content="Dark accent theme." variant="accent" visible arrow={true} shape="fit">
          Tooltip
        </Tooltip>
      </HoneycombThemeProvider>
    </>
  );
};
