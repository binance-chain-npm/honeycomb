import React, { useMemo, useCallback, useEffect } from 'react';
import {
  HeaderGroup,
  Row,
  SortingRule,
  TableOptions,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';
import { Property } from 'csstype';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Button } from '../Button';

import {
  Container,
  Scroll,
  Table,
  Thead,
  TheadTr,
  Th,
  TbodyTr,
  Td,
  SortWrapper,
  Sort,
  SortAscending,
  SortDescending,
  Pagination,
  PaginationWrapper,
  PaginationEllipsis,
  PageNumberButton,
} from './styled';

export type Props<Data extends object> = Testable & {
  data: TableOptions<Data>['data'];
  columns: TableOptions<Data>['columns'];
  header?: {
    display?: boolean;
    fixed?: boolean;
    background?: Property.Background;
  };
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  hasPagination?: boolean;
  interactive?: boolean;
  className?: string;
  manualSortBy?: TableOptions<Data>['manualSortBy'];
  sortBy?: SortingRule<Data>[];
  onPageIndexChange?: (params: { pageIndex: number }) => void;
  onSort?: (params: { sortBy: SortingRule<Data>[] }) => void;
  onRowClick?: (params: { data: Row<Data> }) => void;
};

export const Component = <Data extends object>({
  data,
  columns,
  header,
  pageIndex = 0,
  pageSize = 10,
  hasPagination = false,
  interactive = false,
  className,
  manualSortBy,
  onPageIndexChange,
  onSort,
  onRowClick,
  'data-testid': testId,
  ...otherProps
}: Props<Data>) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const { buildTestId: buildTestIdPagination } = useBuildTestId({ id: buildTestId('pagination') });

  const isControlled = useMemo(() => typeof otherProps.pageCount === 'number', [
    otherProps.pageCount,
  ]);

  const initialState = useMemo(() => {
    const props = {
      pageIndex,
      pageSize,
    };

    return otherProps.sortBy
      ? {
          ...props,
          sortBy: otherProps.sortBy,
        }
      : props;
  }, [pageIndex, pageSize, otherProps.sortBy]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    pageOptions,
    pageCount,
    state: { sortBy },
  } = useTable(
    {
      columns,
      data,
      initialState,
      manualPagination: isControlled,
      pageCount: otherProps.pageCount,
      useControlledState: (state) => {
        return React.useMemo(
          () => ({
            ...state,
            pageIndex,
          }),
          [state],
        );
      },
      manualSortBy,
    },
    useSortBy,
    usePagination,
    useRowSelect,
  );

  const { isHeaderDisplayed, isHeaderFixed } = useMemo(
    () => ({
      isHeaderDisplayed: header?.display ?? true,
      isHeaderFixed: header?.fixed ?? false,
    }),
    [header],
  );

  const filteredPageOptions = useMemo(
    () =>
      pageOptions.filter((it) => {
        if (it === 0) return true;
        if (it === pageCount - 1) return true;
        if (it === pageIndex) return true;
        if (it === pageIndex - 1 && it > 0) return true;
        if (it === pageIndex + 1 && it < pageCount) return true;
        return false;
      }),
    [pageOptions, pageCount, pageIndex],
  );

  const navigate = useCallback(
    (page: number) => {
      onPageIndexChange?.({ pageIndex: page });
    },
    [onPageIndexChange],
  );

  const clickRow = useCallback(
    ({ row }: { row: Row<Data> }) => {
      row.toggleRowSelected();
      onRowClick?.({ data: row });
    },
    [onRowClick],
  );

  useEffect(() => {
    onSort?.({ sortBy });
  }, [onSort, sortBy]);

  useEffect(() => {
    if (isControlled && pageIndex !== 0 && pageIndex >= pageCount) {
      navigate(0);
    }
  }, [isControlled, pageCount, pageIndex, navigate]);

  const getHeader = useCallback(
    (column: HeaderGroup<Data>) => {
      if (!column.defaultCanSort) {
        return (
          <Th
            {...column.getHeaderProps()}
            fixed={isHeaderFixed}
            background={header?.background}
            data-testid={buildTestId(`${column.id}.th`)}
          >
            {column.render('Header')}
          </Th>
        );
      }

      return (
        <Th
          {...column.getHeaderProps(column.getSortByToggleProps())}
          fixed={isHeaderFixed}
          background={header?.background}
          data-testid={buildTestId(`${column.id}.th`)}
        >
          <SortWrapper>
            {column.render('Header')}
            <Sort>
              <SortAscending
                selected={column.isSorted && !column.isSortedDesc}
                data-testisselected={column.isSorted && !column.isSortedDesc}
                data-testid={buildTestId(`${column.id}.th.sort-asc-btn`)}
              />
              <SortDescending
                selected={column.isSorted && !!column.isSortedDesc}
                data-testisselected={column.isSorted && !!column.isSortedDesc}
                data-testid={buildTestId(`${column.id}.th.sort-desc-btn`)}
              />
            </Sort>
          </SortWrapper>
        </Th>
      );
    },
    [buildTestId, isHeaderFixed, header],
  );

  return (
    <Container data-testid={buildTestId()} className={className}>
      <Scroll fixed={isHeaderFixed}>
        <Table {...getTableProps()}>
          {isHeaderDisplayed && (
            <Thead>
              {headerGroups.map((headerGroup) => (
                <TheadTr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(getHeader)}
                </TheadTr>
              ))}
            </Thead>
          )}

          <tbody {...getTableBodyProps()}>
            {(isControlled ? page : rows).map((row) => {
              prepareRow(row);
              return (
                <TbodyTr
                  {...row.getRowProps()}
                  interactive={interactive}
                  onClick={() => clickRow({ row })}
                >
                  {row.cells.map((cell) => {
                    return (
                      <Td
                        {...cell.getCellProps()}
                        data-testid={buildTestId(`row${cell.row.index}.${cell.column.id}.td`)}
                      >
                        {cell.render('Cell')}
                      </Td>
                    );
                  })}
                </TbodyTr>
              );
            })}
          </tbody>
        </Table>
      </Scroll>
      {hasPagination && (
        <Pagination data-testid={buildTestIdPagination()}>
          <PaginationWrapper>
            <Button
              variant="secondary"
              onClick={() => navigate(pageIndex - 1)}
              disabled={pageIndex === 0}
              shape="square"
              size="increased"
              data-testid={buildTestIdPagination('previous-btn')}
            >
              {'<'}
            </Button>
            {filteredPageOptions.map((page, index) => (
              <React.Fragment key={page}>
                <PageNumberButton
                  variant={page === pageIndex ? 'primary' : 'secondary'}
                  onClick={() => navigate(page)}
                  shape="fit"
                  size="increased"
                  data-testid={buildTestIdPagination(`go-to-${page}-btn`)}
                >
                  {page + 1}
                </PageNumberButton>
                {typeof filteredPageOptions[index + 1] === 'number' &&
                  filteredPageOptions[index + 1] !== page + 1 && (
                    <PaginationEllipsis data-testid={buildTestIdPagination(`${page}.ellipsis`)}>
                      …
                    </PaginationEllipsis>
                  )}
              </React.Fragment>
            ))}
            <Button
              variant="secondary"
              onClick={() => navigate(pageIndex + 1)}
              disabled={pageIndex + 1 === pageCount}
              shape="square"
              size="increased"
              data-testid={buildTestIdPagination('next-btn')}
            >
              {'>'}
            </Button>
          </PaginationWrapper>
        </Pagination>
      )}
    </Container>
  );
};

Component.displayName = 'Table';

Component.Scroll = Scroll;
Component.Table = Table;
Component.Sort = Sort;
Component.Th = Th;
Component.TheadTr = TheadTr;
Component.TbodyTr = TbodyTr;
Component.Td = Td;
