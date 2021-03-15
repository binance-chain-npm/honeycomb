import React, { useState } from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react/types-6-0';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Card } from '../Card';
import { AbstractAvatar } from '../AbstractAvatar';
import { Space } from '../Space';

import { Table } from './';

export default {
  component: Table,
  title: `${Sections.Elements}/Table`,
};

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const data = new Array(200).fill(null).map(
  (_, index) =>
    ({
      col1: (
        <Header>
          <AbstractAvatar value="hello" />
          <Space size="small" />
          {index + 1} Hello
        </Header>
      ),
      col2: (
        <Header>
          <AbstractAvatar value="World" />
          <Space size="small" />
          World
        </Header>
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

export const Default = () => (
  <Card padding="none" shadow="increased">
    <Table data={data.slice(0, 10)} columns={columns} />
  </Card>
);

export const NoHeader = () => (
  <Card padding="none" shadow="increased">
    <Table data={data.slice(0, 10)} columns={columns} hasHeader={false} />
  </Card>
);

export const Interactive = () => (
  <Card padding="none" shadow="increased">
    <Table data={data.slice(0, 10)} columns={columns} interactive />
  </Card>
);

export const ControlledWithPagination: Story = () => {
  const [pageIndex, setPageIndex] = useState(5);
  const pageSize = 3;

  return (
    <Card padding="none" shadow="increased">
      <Table
        data={data.slice(pageSize * pageIndex, pageSize * pageIndex + pageSize)}
        columns={columns}
        hasPagination
        pageSize={pageSize}
        pageCount={Math.ceil(data.length / pageSize)}
        pageIndex={pageIndex}
        onPageIndexChange={({ pageIndex }) => setPageIndex(pageIndex)}
        data-testid="table"
      />
    </Card>
  );
};
ControlledWithPagination.decorators = decorators;

export const Sortable = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 10;

  const decimals = [1, 2, 10, 20, 50, 5, 9, 0, 0.8, 1.0];

  const data = new Array(10).fill(null).map(
    (_, index) =>
      ({
        col1: <Header>{10 ** index}</Header>,
        col2: <Header>{decimals[index]}</Header>,
        col3: <Header>{String.fromCharCode(index + 65).toUpperCase()}</Header>,
        col4: (
          <Header>
            <AbstractAvatar value={`${index}`} />
          </Header>
        ),
      } as const),
  );

  const columns = [
    {
      Header: 'Integers',
      accessor: 'col1',
      defaultCanSort: true,
      sortType: 'basic',
    } as const,
    {
      Header: 'Decimals',
      accessor: 'col2',
      defaultCanSort: true,
      sortType: 'basic',
    } as const,
    {
      Header: 'Strings',
      accessor: 'col3',
      defaultCanSort: true,
      sortType: 'basic',
    } as const,
    {
      Header: 'Unsortable',
      accessor: 'col4',
    } as const,
  ];

  return (
    <Card padding="none" shadow="increased">
      <Table
        data={data.slice(pageSize * pageIndex, pageSize * pageIndex + pageSize)}
        columns={columns}
        hasPagination
        pageSize={pageSize}
        pageCount={Math.ceil(data.length / pageSize)}
        pageIndex={pageIndex}
        onPageIndexChange={({ pageIndex }) => setPageIndex(pageIndex)}
        data-testid="table"
      />
    </Card>
  );
};
