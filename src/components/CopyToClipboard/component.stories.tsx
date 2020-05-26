import React from 'react';

import { Sections } from '../../modules/sections';

import { CopyToClipboard } from './';

export default {
  title: `${Sections.Elements}|CopyToClipboard`,
};

export const Default = () => (
  <CopyToClipboard value="a value here" data-testid="copy-to-clipboard" />
);
