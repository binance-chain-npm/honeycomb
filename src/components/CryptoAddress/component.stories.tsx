import React from 'react';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { CryptoAddress } from './';

export default {
  component: CryptoAddress,
  decorators,
  title: `${Sections.Elements}/CryptoAddress`,
};

export const Default = () => (
  <CryptoAddress value="bnb000000000000000000000000000000000000000" data-testid="crypto-address" />
);

export const Format = () => (
  <CryptoAddress
    value="bnb000000000000000000000000000000000000000"
    text="0xb38784***e967Ece49"
    data-testid="crypto-address"
  />
);
