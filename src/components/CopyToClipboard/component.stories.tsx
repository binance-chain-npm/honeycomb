import React from 'react';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { CopyToClipboard } from '.';

export default {
  component: CopyToClipboard,
  decorators,
  title: `${Sections.Elements}/CopyToClipboard`,
};

export const Default = () => (
  <CopyToClipboard value="a value here" data-testid="copy-to-clipboard" />
);
