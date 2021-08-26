import React, { useCallback, useMemo, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { em } from 'polished';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { AbstractAvatar } from '../AbstractAvatar';
import { Card } from '../Card';
import { Icon } from '../Icon';
import { Space } from '../Space';

import { Table } from '.';

export default {
  component: Table,
  title: `${Sections.Elements}/Table`,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCard = styled(Card)`
  padding: 0;
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
          <AbstractAvatar value="world" />
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
  <StyledCard shadow="increased">
    <Table data={data.slice(0, 10)} columns={columns} />
  </StyledCard>
);

export const HeaderStyles = () => {
  const theme = useTheme();

  const StyledContainer = styled(Container)`
    height: calc(100vh - 2em);
  `;

  const FixedTableContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `;

  const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    padding: 0;
  `;

  return (
    <StyledContainer>
      <div>
        <h3>no header</h3>
        <StyledCard shadow="increased">
          <Table data={data.slice(0, 3)} columns={columns} header={{ display: false }} />
        </StyledCard>
      </div>
      <FixedTableContainer>
        <h3>fixed</h3>
        <StyledCard shadow="increased">
          <Table
            data={data.slice(0, 50)}
            columns={columns}
            header={{ fixed: true, background: theme.honeycomb.color.bg.normal }}
          />
        </StyledCard>
      </FixedTableContainer>
    </StyledContainer>
  );
};

export const Interactive = () => (
  <StyledCard shadow="increased">
    <Table data={data.slice(0, 10)} columns={columns} interactive />
  </StyledCard>
);

export const Selectable = () => {
  interface Data {
    index: number;
  }

  const data: Array<Data> = useMemo(
    () =>
      new Array(10).fill(null).map<Data>((_, index) => ({ index })),
    [],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Column 1',
        Cell: ({ value }: { value: any }) => (
          <Header>
            <AbstractAvatar value="hello" />
            <Space size="small" />
            {value + 1} Hello
          </Header>
        ),
        accessor: (it: Data) => it.index,
        id: 'col1',
      } as const,
      {
        Header: 'Column 2',
        Cell: () => (
          <Header>
            <AbstractAvatar value="world" />
            <Space size="small" />
            World
          </Header>
        ),
        accessor: (it: Data) => it.index,
        id: 'col2',
      } as const,
    ],
    [],
  );

  return (
    <StyledCard shadow="increased">
      <Table
        data={data.slice(0, 10)}
        columns={columns}
        interactive
        onRowClick={action('clicked')}
      />
    </StyledCard>
  );
};

export const CustomRowHeight = () => {
  const StyledTableA = styled(Table)`
    ${Table.TheadTr}, ${Table.TbodyTr} {
      height: ${em(32)};
    }
  `;

  const StyledTableB = styled(Table)`
    ${Table.TheadTr}, ${Table.TbodyTr} {
      height: ${em(72)};
    }
  `;

  const StyledTableC = styled(Table)`
    ${Table.TheadTr}, ${Table.TbodyTr} {
      height: ${em(94)};
    }
  `;

  return (
    <Container>
      <StyledCard shadow="increased">
        <StyledTableA data={data.slice(0, 3)} columns={columns} />
      </StyledCard>
      <StyledCard shadow="increased">
        <Table data={data.slice(0, 3)} columns={columns} />
      </StyledCard>
      <StyledCard shadow="increased">
        <StyledTableB data={data.slice(0, 3)} columns={columns} />
      </StyledCard>
      <StyledCard shadow="increased">
        <StyledTableC data={data.slice(0, 3)} columns={columns} />
      </StyledCard>
    </Container>
  );
};

export const ControlledWithPagination: Story = () => {
  const [pageIndex, setPageIndex] = useState(5);
  const pageSize = 3;

  return (
    <StyledCard shadow="increased">
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
    </StyledCard>
  );
};
ControlledWithPagination.decorators = decorators;

const StyledTable = styled(Table)`
  ${Table.Sort} {
    order: 2;
  }
`;

const Title = styled.span`
  display: flex;
  order: 1;
`;

const Info = styled(Icon.InfoCircle)`
  display: flex;
  margin-left: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.small)};
  order: 3;
`;

export const Sortable = () => {
  const data = useMemo(
    () =>
      new Array(10).fill(null).map(
        (_, index) =>
          ({
            col1: 10 ** index,
            col2: 10 - index,
            col3: String.fromCharCode(index + 65).toUpperCase(),
            col4: (
              <Header>
                <AbstractAvatar value={`${index}`} />
              </Header>
            ),
          } as const),
      ),
    [],
  );

  const sortCustom = useCallback((a: any, b: any) => {
    return a > b ? 1 : -1;
  }, []);

  const renderCustom = useCallback(
    ({ value }: { value: any }) => (
      <Header>
        <AbstractAvatar value={value} />
        <Space size="small" />
        {value}
      </Header>
    ),
    [],
  );

  const columns = [
    {
      Header: (
        <>
          <Title>Primitive Sorting</Title>
          <Info />
        </>
      ),
      accessor: 'col1',
      defaultCanSort: true,
      sortType: 'basic',
    } as const,
    {
      Header: 'Custom Sorting',
      accessor: 'col2',
      defaultCanSort: true,
      sortMethod: sortCustom,
    } as const,
    {
      Header: 'Custom Node Sorting',
      accessor: 'col3',
      defaultCanSort: true,
      sortType: 'alphanumeric',
      Cell: renderCustom,
    } as const,
    {
      Header: 'Unsortable',
      accessor: 'col4',
    } as const,
  ];

  return (
    <StyledCard shadow="increased">
      <Table data={data} columns={columns} data-testid="table" />
    </StyledCard>
  );
};

export const SortableWithDefaultSorting = () => {
  const data = useMemo(
    () =>
      new Array(10).fill(null).map(
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
                <AbstractAvatar value="world" />
                <Space size="small" />
                World
              </Header>
            ),
          } as const),
      ),
    [],
  );

  const columns = [
    {
      Header: 'Column 1',
      accessor: 'col1',
      defaultCanSort: true,
      sortType: 'basic',
    } as const,
    {
      Header: 'Column 2',
      accessor: 'col2',
    } as const,
  ];

  const sortBy = useMemo(
    () => [
      {
        id: 'col1',
        desc: true,
      },
    ],
    [],
  );

  return (
    <StyledCard shadow="increased">
      <StyledTable data={data} columns={columns} sortBy={sortBy} />
    </StyledCard>
  );
};

export const SortableWithPagination = () => {
  interface Data {
    name: string;
    apr: number;
    apy: number;
  }

  const initialData: Array<Data> = useMemo(
    () => [
      {
        name: 'Apple',
        apr: 4.0,
        apy: 4.08,
      },
      {
        name: 'Melon',
        apr: 10.0,
        apy: 10.52,
      },
      {
        name: 'Banana',
        apr: 160.0,
        apy: 393.57,
      },
      {
        name: 'Orange',
        apr: 1.0,
        apy: 1.01,
      },
      {
        name: 'Carrot',
        apr: 9.0,
        apy: 9.42,
      },
      {
        name: 'Potato',
        apr: 10.0,
        apy: 10.52,
      },
      {
        name: 'Celery',
        apr: 20.0,
        apy: 22.13,
      },
      {
        name: 'Peach',
        apr: 80.0,
        apy: 122.36,
      },
      {
        name: 'Lemon',
        apr: 35.0,
        apy: 41.88,
      },
      {
        name: 'Lime',
        apr: 100.0,
        apy: 171.46,
      },
    ],
    [],
  );

  const [pageIndex, setPageIndex] = useState(0);
  const [data, setData] = useState<Data[]>([]);
  const pageSize = 5;

  const renderPercent = useCallback(({ value }: { value: number }) => <>{value.toFixed(2)}%</>, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: (it: Data) => it.name,
        id: 'name',
        defaultCanSort: true,
      } as const,
      {
        Header: 'APR',
        accessor: (it: Data) => it.apr,
        id: 'apr',
        defaultCanSort: true,
        Cell: renderPercent,
      } as const,
      {
        Header: 'APY',
        accessor: (it: Data) => it.apy,
        id: 'apy',
        defaultCanSort: true,
        Cell: renderPercent,
      } as const,
    ],
    [renderPercent],
  );

  const sortBy = useCallback(
    ({ sortBy }) => {
      initialData.sort((a, b) => {
        for (let i = 0; i < sortBy.length; ++i) {
          if ((a as any)[sortBy[i].id] > (b as any)[sortBy[i].id]) return sortBy[i].desc ? -1 : 1;
          if ((a as any)[sortBy[i].id] < (b as any)[sortBy[i].id]) return sortBy[i].desc ? 1 : -1;
        }
        return 0;
      });
      setData(initialData.slice(pageSize * pageIndex, pageSize * pageIndex + pageSize));
    },
    [initialData, pageIndex, pageSize],
  );

  return (
    <StyledCard shadow="increased">
      <Table
        data={data}
        columns={columns}
        hasPagination
        pageSize={pageSize}
        pageCount={Math.ceil(initialData.length / pageSize)}
        pageIndex={pageIndex}
        onPageIndexChange={({ pageIndex }) => setPageIndex(pageIndex)}
        manualSortBy
        onSort={sortBy}
        data-testid="table"
      />
    </StyledCard>
  );
};
