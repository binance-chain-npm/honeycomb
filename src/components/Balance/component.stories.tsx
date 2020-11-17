import React from 'react';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { Balance } from './';

export default {
  component: Balance,
  decorators,
  title: `${Sections.Elements}/Balance`,
};

export const Default = () => (
  <>
    <div>
      <Balance data-testid="en-usd" variant="fiat" currency="USD" locale="en-US" value={12345.67} />
    </div>
    <div>
      <Balance
        data-testid="en-bnb"
        variant="crypto"
        currency="BNB"
        locale="en-US"
        value={12345.67}
      />
    </div>
    <div>
      <Balance data-testid="es-usd" variant="fiat" currency="USD" locale="es-ES" value={12345.67} />
    </div>
    <div>
      <Balance
        data-testid="es-bnb"
        variant="crypto"
        currency="BNB"
        locale="es-ES"
        value={12345.67}
      />
    </div>
  </>
);
