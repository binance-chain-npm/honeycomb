import React from 'react';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';

import { variants, sizes, shapes } from './styled';

import { Button } from './';

export default {
  title: `${Sections.Elements}|Button`,
};

const getText = ({
  size,
  variant,
  shape,
}: Pick<React.ComponentProps<typeof Button>, 'size' | 'variant' | 'shape'>) => {
  if (shape === 'square') return <Icon.Tick />;
  return (
    <>
      A {size} {variant} button
    </>
  );
};

export const Default = () => (
  <>
    {sizes.map((size) =>
      variants.map((variant) =>
        shapes.map((shape) => (
          <div style={{ marginBottom: '1em' }}>
            <Button
              onClick={action('clicked')}
              key={`${size}-${variant}`}
              variant={variant}
              size={size}
              shape={shape}
            >
              {getText({ size, variant, shape })}
            </Button>
          </div>
        )),
      ),
    )}
  </>
);

export const Disabled = () => (
  <>
    {sizes.map((size) =>
      variants.map((variant) =>
        shapes.map((shape) => (
          <div style={{ marginBottom: '1em' }}>
            <Button
              onClick={action('clicked')}
              key={`${size}-${variant}`}
              variant={variant}
              size={size}
              shape={shape}
              disabled
            >
              {getText({ size, variant, shape })}
            </Button>
          </div>
        )),
      ),
    )}
  </>
);

export const AsAnchor = () => (
  <>
    {sizes.map((size) =>
      variants.map((variant) =>
        shapes.map((shape) => (
          <div style={{ marginBottom: '1em' }}>
            <Button
              href="https://binance.org"
              onClick={action('clicked')}
              key={`${size}-${variant}`}
              variant={variant}
              size={size}
              shape={shape}
            >
              {getText({ size, variant, shape })}
            </Button>
          </div>
        )),
      ),
    )}
  </>
);
