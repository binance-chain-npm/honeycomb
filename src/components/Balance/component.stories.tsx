import React from 'react';

import { Sections } from '../../modules/sections';

import { Balance } from './';

export default {
  component: Balance,
  title: `${Sections.Elements}/Balance`,
};

export const Default = () => (
  <>
    <div data-testid="en-usd">
      <Balance variant="fiat" currency="USD" locale="en-US" value={12345.67} />
    </div>
    <div data-testid="en-bnb">
      <Balance variant="crypto" currency="BNB" locale="en-US" value={12345.67} />
    </div>
    <div data-testid="es-usd">
      <Balance variant="fiat" currency="USD" locale="es-ES" value={12345.67} />
    </div>
    <div data-testid="es-bnb">
      <Balance variant="crypto" currency="BNB" locale="es-ES" value={12345.67} />
    </div>
  </>
);
