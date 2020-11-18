import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { action } from '@storybook/addon-actions';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';
import { SHAPES } from '../internal/Shape';
import { sizes } from '../internal/Size';

import { VARIANTS } from './styled';

import { Button } from './';

export default {
  component: Button,
  decorators,
  title: `${Sections.Elements}/Button`,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

const getText = ({
  variant,
  shape,
}: Pick<React.ComponentProps<typeof Button>, 'variant' | 'shape'>) => {
  if (shape === 'square') return <Icon.Tick />;
  return <>A {variant} button</>;
};

export const Default = () => (
  <Container>
    {VARIANTS.map((variant) =>
      SHAPES.map((shape) => (
        <Container>
          <Button onClick={action('clicked')} key={`${variant}`} variant={variant} shape={shape}>
            {getText({ variant, shape })}
          </Button>
        </Container>
      )),
    )}
  </Container>
);

export const Sizes = () => (
  <Container>
    {sizes.map((size) => (
      <Container>
        <Button onClick={action('clicked')} key={`${size}`} variant="primary" size={size}>
          A {size} button
        </Button>
      </Container>
    ))}
  </Container>
);

export const Disabled = () => (
  <Container>
    {VARIANTS.map((variant) =>
      SHAPES.map((shape) => (
        <Container>
          <Button
            onClick={action('clicked')}
            key={`${variant}`}
            variant={variant}
            shape={shape}
            disabled
          >
            {getText({ variant, shape })}
          </Button>
        </Container>
      )),
    )}
  </Container>
);

export const AsAnchor = () => (
  <Container>
    {VARIANTS.map((variant) =>
      SHAPES.map((shape) => (
        <Container>
          <Button
            href="https://binance.org"
            onClick={action('clicked')}
            key={`${variant}`}
            variant={variant}
            shape={shape}
          >
            {getText({ variant, shape })}
          </Button>
        </Container>
      )),
    )}
  </Container>
);

export const WithIcon = () => (
  <Container>
    {VARIANTS.map((variant) => (
      <Container>
        <Button
          href="https://binance.org"
          onClick={action('clicked')}
          key={`${variant}`}
          variant={variant}
          icon={<Icon.BinanceChain />}
        >
          A button
        </Button>
      </Container>
    ))}
  </Container>
);
