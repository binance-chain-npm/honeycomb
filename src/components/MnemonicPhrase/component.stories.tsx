import React from 'react';

import { Sections } from '../../modules/sections';

import { MnemonicPhrase } from './';

export default {
  title: `${Sections.Elements}|MnemonicPhrase`,
};

const phrase = 'this is a mnemonic phrase just to test how this component will render';

export const Default = () => <MnemonicPhrase value={phrase} />;

export const WithArray = () => <MnemonicPhrase value={phrase.split(' ')} />;
