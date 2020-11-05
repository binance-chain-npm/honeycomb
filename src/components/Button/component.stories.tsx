import React from 'react';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';
import { shapes } from '../internal/Shape';
import { sizes } from '../internal/Size';

import { variants } from './styled';

import { Button } from './';

export default {
  component: Button,
  title: `${Sections.Elements}/Button`,
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

const getText = ({
  variant,
  shape,
}: Pick<React.ComponentProps<typeof Button>, 'variant' | 'shape'>) => {
  if (shape === 'square') return <Icon.Tick />;
  return <>A {variant} button</>;
};

export const Default = () => (
  <>
    {variants.map((variant) =>
      shapes.map((shape) => (
        <div style={{ marginBottom: '1em' }}>
          <Button onClick={action('clicked')} key={`${variant}`} variant={variant} shape={shape}>
            {getText({ variant, shape })}
          </Button>
        </div>
      )),
    )}
  </>
);

export const Sizes = () => (
  <>
    {sizes.map((size) => (
      <div style={{ marginBottom: '1em' }}>
        <Button onClick={action('clicked')} key={`${size}`} variant="primary" size={size}>
          A {size} button
        </Button>
      </div>
    ))}
  </>
);

export const Disabled = () => (
  <>
    {variants.map((variant) =>
      shapes.map((shape) => (
        <div style={{ marginBottom: '1em' }}>
          <Button
            onClick={action('clicked')}
            key={`${variant}`}
            variant={variant}
            shape={shape}
            disabled
          >
            {getText({ variant, shape })}
          </Button>
        </div>
      )),
    )}
  </>
);

export const AsAnchor = () => (
  <>
    {variants.map((variant) =>
      shapes.map((shape) => (
        <div style={{ marginBottom: '1em' }}>
          <Button
            href="https://binance.org"
            onClick={action('clicked')}
            key={`${variant}`}
            variant={variant}
            shape={shape}
          >
            {getText({ variant, shape })}
          </Button>
        </div>
      )),
    )}
  </>
);

export const WithIcon = () => (
  <>
    {variants.map((variant) => (
      <div style={{ marginBottom: '1em' }}>
        <Button
          href="https://binance.org"
          onClick={action('clicked')}
          key={`${variant}`}
          variant={variant}
          icon={<Icon.BinanceChain />}
        >
          A button
        </Button>
      </div>
    ))}
  </>
);
