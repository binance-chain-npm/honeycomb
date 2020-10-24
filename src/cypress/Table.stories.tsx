import React, { useCallback, useMemo, useState } from 'react';

import { Sections } from '../modules/sections';
import { Card } from '../components/Card';
import { Dropdown } from '../components/Dropdown';
import { Table } from '../components/Table';

export default {
  title: `${Sections.Tests}/Table`,
};

export const Default = () => {
  const PAGE_SIZE = 10;

  const options = [
    {
      index: 0,
      value: '50 Items',
    },
    {
      index: 1,
      value: '100 Items',
    },
  ];

  const [selected, setSelected] = useState<{ index: number; value: React.ReactNode }>(options[0]);

  const fullData = useMemo(
    () =>
      new Array(selected.index === 0 ? 50 : 100).fill(null).map(
        (_, index) =>
          ({
            col1: (
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {index + 1}
              </div>
            ),
            col2: (
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}></div>
            ),
          } as const),
      ),
    [selected.index],
  );

  const [data, setData] = React.useState(fullData);
  const [pageCount, setPageCount] = useState(fullData.length);

  const columns = [
    {
      Header: `${selected.value}`,
      accessor: 'col1',
    } as const,
    {
      Header: (
        <Dropdown
          data-testid="dropdown"
          target={<Dropdown.DefaultTarget>{selected.value}</Dropdown.DefaultTarget>}
        >
          <Dropdown.Item
            onClick={() => {
              setSelected(options[0]);
            }}
            selected={selected.index === 0}
            data-testid="option-0"
          >
            {options[0].value}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSelected(options[1]);
            }}
            selected={selected.index === 1}
            data-testid="option-1"
          >
            {options[1].value}
          </Dropdown.Item>
        </Dropdown>
      ),
      accessor: 'col2',
    } as const,
  ];

  const updateData = useCallback(
    ({ pageIndex }) => {
      const start = PAGE_SIZE * pageIndex;
      const end = start + PAGE_SIZE;
      setData(fullData.slice(start, end));
      setPageCount(Math.ceil(fullData.length / PAGE_SIZE));
    },
    [fullData],
  );

  return (
    <Card variant="bare">
      <Table
        data={data}
        columns={columns}
        hasPagination
        pageSize={PAGE_SIZE}
        pageCount={pageCount}
        initialPageIndex={6}
        onPageIndexChange={updateData}
        data-testid={'table'}
      />
    </Card>
  );
};
