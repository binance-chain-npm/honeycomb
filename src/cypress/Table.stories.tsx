import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import { Sections } from '../modules/sections';
import { Card } from '../components/Card';
import { Dropdown } from '../components/Dropdown';
import { Table } from '../components/Table';

export default {
  component: Table,
  title: `${Sections.Tests}/Table`,
};

const StyledCard = styled(Card)`
  padding: 0;
`;

export const Default = () => {
  const pageSize = 10;

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
  const [pageIndex, setPageIndex] = React.useState(6);

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

  const [data, setData] = React.useState(fullData.slice(0, pageSize));

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
              updateData({ pageIndex: 0 });
            }}
            selected={selected.index === 0}
            data-testid="option-0"
          >
            {options[0].value}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSelected(options[1]);
              updateData({ pageIndex: 0 });
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
      const start = pageSize * pageIndex;
      const end = start + pageSize;
      setPageIndex(pageIndex);
      setData(fullData.slice(start, end));
    },
    [fullData],
  );

  return (
    <StyledCard>
      <Table
        data={data}
        columns={columns}
        hasPagination
        pageIndex={pageIndex}
        pageSize={pageSize}
        pageCount={Math.ceil(fullData.length / pageSize)}
        onPageIndexChange={updateData}
        data-testid={'table'}
      />
    </StyledCard>
  );
};
