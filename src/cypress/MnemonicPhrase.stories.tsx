import React from 'react';

import { MnemonicPhrase } from '../../src/components/MnemonicPhrase';
import { Sections } from '../../src/modules/sections';

export default {
  title: `${Sections.Tests}/MnemonicPhrase`,
};

export const Default = () => (
  <MnemonicPhrase value="this is a mnemonic phrase just to test how this component will render" />
);
