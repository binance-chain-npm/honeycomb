import React from 'react';

import { Sections } from '../../modules/sections';
import { Card } from '../Card';

import { Table } from './';

export default {
  title: `${Sections.Elements}/Table`,
};

export const Default = () => (
  <Card variant="bare">
    <Table />
  </Card>
);
