import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { Story } from '@storybook/react/types-6-0';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { HoneycombThemeProvider } from '../../modules/themes';
import { Space } from '../Space';
import { Button } from '../Button';

import { RADII, SIZES, VARIANTS } from './styled';

import { Tooltip } from './';

export default {
  component: Tooltip,
  title: `${Sections.Elements}/Tooltip`,
};

export const Default: Story = () => {
  return (
    <Tooltip content="Some tooltip content..." data-testid="tooltip">
      <Tooltip.DefaultTarget>Tooltip</Tooltip.DefaultTarget>
    </Tooltip>
  );
};
Default.decorators = decorators;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  > * {
    width: 6em;
  }
`;

const Label = styled.div`
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
`;

const PlacementContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;

  > *:not(:last-child) {
    margin-right: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

export const Variants = () => {
  return (
    <Container>
      <h3>padding</h3>
      <Label>default="small"</Label>
      <Row>
        {SIZES.map((size) => (
          <Tooltip visible content={size} padding={size}>
            <div />
          </Tooltip>
        ))}
      </Row>
      <Space size="increased" />

      <h3>radius</h3>
      <Label>default="reduced"</Label>
      <Row>
        {RADII.map((radius) => (
          <Tooltip visible content={radius} radius={radius}>
            <div />
          </Tooltip>
        ))}
      </Row>
      <Space size="increased" />

      <h3>variant</h3>
      <Label>default="normal"</Label>
      <Row>
        {VARIANTS.map((variant) => (
          <Tooltip visible content={variant} variant={variant}>
            <div />
          </Tooltip>
        ))}
      </Row>
      <Space size="increased" />

      <h3>arrow</h3>
      <Label>default=false</Label>
      <Row>
        <Tooltip visible content="arrow" arrow>
          <div />
        </Tooltip>
      </Row>
      <Space size="increased" />

      <h3>placement</h3>
      <Label>default="bottom-start"</Label>
      <PlacementContainer>
        <Tooltip content="top" placement="top" shape="fit" arrow>
          <Button variant="primary" shape="fit">
            top
          </Button>
        </Tooltip>
        <Tooltip content="right" placement="right" shape="fit" arrow>
          <Button variant="primary" shape="fit">
            right
          </Button>
        </Tooltip>
        <Tooltip content="bottom" placement="bottom" shape="fit" arrow>
          <Button variant="primary" shape="fit">
            bottom
          </Button>
        </Tooltip>
        <Tooltip content="left" placement="left" shape="fit" arrow>
          <Button variant="primary" shape="fit">
            left
          </Button>
        </Tooltip>
        <span>...etc.</span>
      </PlacementContainer>
      <Space size="increased" />
    </Container>
  );
};

const FixedHeight = styled.div`
  height: 4em;
`;

export const MixedThemes = () => {
  return (
    <>
      <HoneycombThemeProvider variant="light">
        <Tooltip content="Light theme." visible arrow={true} shape="fit">
          <div />
        </Tooltip>
      </HoneycombThemeProvider>
      <HoneycombThemeProvider variant="dark">
        <Tooltip content="Dark theme." visible arrow={true} shape="fit">
          <FixedHeight />
        </Tooltip>
      </HoneycombThemeProvider>
      <HoneycombThemeProvider variant="light">
        <Tooltip content="Light accent theme." variant="accent" visible arrow={true} shape="fit">
          <FixedHeight />
        </Tooltip>
      </HoneycombThemeProvider>
      <HoneycombThemeProvider variant="dark">
        <Tooltip content="Dark accent theme." variant="accent" visible arrow={true} shape="fit">
          <FixedHeight />
        </Tooltip>
      </HoneycombThemeProvider>
    </>
  );
};
