import React, { useMemo } from 'react';

import { Sections } from '../../modules/sections';
import { Card } from '../Card';

import { Table } from './';

export default {
  title: `${Sections.Elements}/Table`,
};

export const Default = () => {
  const data = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      } as const,
      {
        col1: 'react-table',
        col2: 'rocks',
      } as const,
      {
        col1: 'whatever',
        col2: 'you want',
      } as const,
    ],
    [],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1',
      } as const,
      {
        Header: 'Column 2',
        accessor: 'col2',
      } as const,
    ],
    [],
  );

  return (
    <Card variant="bare">
      <Table data={data} columns={columns} />
    </Card>
  );
};
