import React from 'react';

import { Sections } from '../../modules/sections';
import { Card } from '../Card';

import { CryptoAddress } from './';

export default {
  title: `${Sections.Elements}/CryptoAddress`,
};

export const Default = () => (
  <Card>
    <CryptoAddress
      value="bnb000000000000000000000000000000000000000"
      data-testid="crypto-address"
    />
  </Card>
);
