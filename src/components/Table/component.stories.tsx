import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Card } from '../Card';
import { AbstractAvatar } from '../AbstractAvatar';
import { Space } from '../Space';

import { Table } from './';

export default {
  title: `${Sections.Elements}/Table`,
};

const data = new Array(200).fill(null).map(
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
);

const columns = [
  {
    Header: 'Column 1',
    accessor: 'col1',
  } as const,
  {
    Header: 'Column 2',
    accessor: 'col2',
  } as const,
];

export const NoHeader = () => (
  <Card variant="bare">
    <Table data={data} columns={columns} hasHeader={false} data-testid="MyTable" />
  </Card>
);

export const NoPagination = () => (
  <Card variant="bare">
    <Table data={data} columns={columns} data-testid="MyTable" />
  </Card>
);

export const AutomaticPagination = () => (
  <Card variant="bare">
    <Table data={data} columns={columns} hasPagination data-testid="MyTable" />
  </Card>
);

export const ControlledPagination = () => {
  const [pageIndex, setPageIndex] = useState(5);
  const pageSize = 3;
  return (
    <Card variant="bare">
      <Table
        data={data.slice(pageSize * pageIndex, pageSize * pageIndex + pageSize)}
        columns={columns}
        hasPagination
        pageSize={pageSize}
        pageCount={Math.ceil(data.length / pageSize)}
        initialPageIndex={pageIndex}
        onPageIndexChange={({ pageIndex }) => setPageIndex(pageIndex)}
        data-testid="MyTable"
      />
    </Card>
  );
};

export const Interactive = () => (
  <Card variant="bare">
    <Table data={data} columns={columns} interactive />
  </Card>
);
