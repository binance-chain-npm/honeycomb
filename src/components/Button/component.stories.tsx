import React from 'react';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';

import { variants } from './styled';

import { Button } from './';

export default {
  title: `${Sections.Elements}|Button`,
};

export const Default = () => (
  <>
    {variants.map((variant) => (
      <div style={{ marginBottom: '1em' }}>
        <Button onClick={action('clicked')} key={variant} variant={variant}>
          A {variant} button
        </Button>
      </div>
    ))}
  </>
);

export const Disabled = () => (
  <>
    {variants.map((variant) => (
      <div style={{ marginBottom: '1em' }}>
        <Button onClick={action('clicked')} key={variant} variant={variant} disabled>
          A {variant} button
        </Button>
      </div>
    ))}
  </>
);

export const AsAnchor = () => (
  <>
    {variants.map((variant) => (
      <div style={{ marginBottom: '1em' }}>
        <Button
          href="https://binance.org"
          onClick={action('clicked')}
          key={variant}
          variant={variant}
        >
          A {variant} button
        </Button>
      </div>
    ))}
  </>
);
