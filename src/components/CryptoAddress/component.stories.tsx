import React from 'react';

import { Sections } from '../../modules/sections';

import { CryptoAddress } from './';

export default {
  title: `${Sections.Elements}/CryptoAddress`,
};

export const Default = () => <CryptoAddress value="bnb000000000000000000000000000000000000000" />;
