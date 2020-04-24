import React from 'react';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';

import { variants, sizes } from './styled';

import { Button } from './';

export default {
  title: `${Sections.Elements}|Button`,
};

export const Default = () => (
  <>
    {sizes.map((size) =>
      variants.map((variant) => (
        <div style={{ marginBottom: '1em' }}>
          <Button
            onClick={action('clicked')}
            key={`${size}-${variant}`}
            variant={variant}
            size={size}
          >
            A {size} {variant} button
          </Button>
        </div>
      )),
    )}
  </>
);

export const Disabled = () => (
  <>
    {sizes.map((size) =>
      variants.map((variant) => (
        <div style={{ marginBottom: '1em' }}>
          <Button
            onClick={action('clicked')}
            key={`${size}-${variant}`}
            variant={variant}
            size={size}
            disabled
          >
            A {size} {variant} button
          </Button>
        </div>
      )),
    )}
  </>
);

export const AsAnchor = () => (
  <>
    {sizes.map((size) =>
      variants.map((variant) => (
        <div style={{ marginBottom: '1em' }}>
          <Button
            href="https://binance.org"
            onClick={action('clicked')}
            key={`${size}-${variant}`}
            variant={variant}
            size={size}
          >
            A {size} {variant} button
          </Button>
        </div>
      )),
    )}
  </>
);
