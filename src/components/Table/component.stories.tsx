import React, { useMemo } from 'react';

import { Sections } from '../../modules/sections';
import { Card } from '../Card';
import { AbstractAvatar } from '../AbstractAvatar';
import { Space } from '../Space';

import { Table } from './';

export default {
  title: `${Sections.Elements}/Table`,
};

export const Default = () => {
  const data = useMemo(
    () =>
      new Array(200).fill(null).map(
        (_, index) =>
          ({
            col1: (
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <AbstractAvatar value="hello" />
                <Space size="small" />
                {index + 1} Hello
              </div>
            ),
            col2: (
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <AbstractAvatar value="World" />
                <Space size="small" />
                World
              </div>
            ),
          } as const),
      ),
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
      <Table data={data} columns={columns} hasPagination />
    </Card>
  );
};
