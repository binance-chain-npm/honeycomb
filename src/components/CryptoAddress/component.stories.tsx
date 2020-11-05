import React from 'react';

import { Sections } from '../../modules/sections';
import { Card } from '../Card';

import { CryptoAddress } from './';

export default {
  component: CryptoAddress,
  title: `${Sections.Elements}/CryptoAddress`,
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Default = () => (
  <Card>
    <CryptoAddress
      value="bnb000000000000000000000000000000000000000"
      data-testid="crypto-address"
    />
  </Card>
);

export const Format = () => (
  <Card>
    <CryptoAddress
      value="bnb000000000000000000000000000000000000000"
      text="0xb38784***e967Ece49"
      data-testid="crypto-address"
    />
  </Card>
);
