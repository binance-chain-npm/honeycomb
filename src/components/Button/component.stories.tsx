import React from 'react';
import { action } from '@storybook/addon-actions';

import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';

import { variants, sizes } from './styled';

import { Button } from './';

export default {
  title: `${Sections.Elements}|Button`,
};

const getText = ({
  size,
  variant,
}: Pick<React.ComponentProps<typeof Button>, 'size' | 'variant'>) => {
  if (size && /^circle-/i.test(size)) return <Icon.Tick />;
  return (
    <>
      A {size} {variant} button
    </>
  );
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
            {getText({ size, variant })}
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
            {getText({ size, variant })}
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
            {getText({ size, variant })}
          </Button>
        </div>
      )),
    )}
  </>
);
