import React from 'react';

import { Sections } from '../../modules/sections';
import { HoneycombThemeProvider } from '../../modules/themes';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Space } from '../Space';

import { Tooltip } from './';

export default {
  title: `${Sections.Elements}/Tooltip`,
};

export const Default = () => {
  return (
    <Tooltip
      content={<Tooltip.Content>Some tooltip content...</Tooltip.Content>}
      data-testid="tooltip"
    >
      Tooltip
    </Tooltip>
  );
};

export const MixedThemes = () => {
  return (
    <>
      <HoneycombThemeProvider variant="light">
        <Tooltip content={<Tooltip.Content>Light theme.</Tooltip.Content>} visible>
          Tooltip
        </Tooltip>
      </HoneycombThemeProvider>
      <div style={{ height: '50px' }} />
      <HoneycombThemeProvider variant="dark">
        <Tooltip content={<Tooltip.Content>Dark theme.</Tooltip.Content>} visible>
          Tooltip
        </Tooltip>
      </HoneycombThemeProvider>
    </>
  );
};

export const DefaultTarget = () => {
  const tooltip = (target: React.ReactNode) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Tooltip
          content={<Tooltip.Content padding="small">Some tooltip content...</Tooltip.Content>}
          placement="bottom"
          arrow={true}
          radius="micro"
          variant="accent"
          visible
        >
          {target}
        </Tooltip>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {tooltip(
        <Button variant="secondary" shape="square" size="increased">
          <Icon.ArrowTopRight />
        </Button>,
      )}
      <Space size="giant" />
      {tooltip(
        <Tooltip.DefaultTarget>
          <Icon.InfoCircle />
        </Tooltip.DefaultTarget>,
      )}
      <Space size="giant" />
      {tooltip(<Tooltip.DefaultTarget>Tooltip</Tooltip.DefaultTarget>)}
    </div>
  );
};
