import React from 'react';

import { Sections } from '../../modules/sections';

import { CopyToClipboard } from './';

export default {
  component: CopyToClipboard,
  title: `${Sections.Elements}/CopyToClipboard`,
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Default = () => (
  <CopyToClipboard value="a value here" data-testid="copy-to-clipboard" />
);
