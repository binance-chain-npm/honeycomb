import React from 'react';

import { Sections } from '../../modules/sections';

import { Tooltip } from './';

export default {
  title: `${Sections.Elements}/Tooltip`,
};

export const Default = () => {
  return (
    <Tooltip content="heyyyy there" data-testid="Tooltip">
      Here!
    </Tooltip>
  );
};
