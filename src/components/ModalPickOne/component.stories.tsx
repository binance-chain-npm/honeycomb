import React from 'react';

import { Sections } from '../../modules/sections';

import { ModalPickOne } from './';

export default {
  title: `${Sections.Elements}|ModalPickOne`,
};

export const Default = () => {
  return <ModalPickOne open={true} onClose={() => {}} data-testid="MyModal" />;
};
