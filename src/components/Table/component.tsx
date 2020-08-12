import React, { useMemo, useEffect } from 'react';
import { useTable, TableOptions, usePagination } from 'react-table';

import { Button } from '../Button';
import { Testable, useBuildTestId } from '../../modules/test-ids';

import {
  Container,
  Scroll,
  Table,
  Thead,
  TheadTr,
  Th,
  TbodyTr,
  Td,
  Pagination,
  PaginationWrapper,
  PaginationEllipsis,
  PageNumberButton,
} from './styled';

export type Props<Data extends object> = Testable & {
  data: TableOptions<Data>['data'];
  columns: TableOptions<Data>['columns'];
  initialPageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  hasPagination?: boolean;
  onPageIndexChange?: (params: { pageIndex: number }) => void;
};

export const Component = <Data extends object>({
  data,
  columns,
  initialPageIndex = 0,
  pageSize = 10,
  pageCount: pageCountParam,
  hasPagination = false,
  onPageIndexChange,
  'data-testid': testId,
}: Props<Data>) => {
  const buildTestId = useBuildTestId(testId);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: initialPageIndex, pageSize },
      manualPagination: typeof pageCountParam === 'number',
      pageCount: pageCountParam,
    },
    usePagination,
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

  useEffect(() => {
    onPageIndexChange?.({ pageIndex });
  }, [pageIndex, onPageIndexChange]);

  useEffect(() => {
    if (!pageSize) return;
    setPageSize(pageSize);
  }, [pageSize, setPageSize]);

  return (
    <Container data-testid={buildTestId()}>
      <Scroll>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <TheadTr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps()} data-testid={buildTestId(`col.${column.id}.th`)}>
                    {column.render('Header')}
                  </Th>
                ))}
              </TheadTr>
            ))}
          </Thead>

          <tbody {...getTableBodyProps()}>
            {(hasPagination ? page : rows).map((row) => {
              prepareRow(row);
              return (
                <TbodyTr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td
                        {...cell.getCellProps()}
                        data-testid={buildTestId(`row.${cell.row.index}.col.${cell.column.id}.td`)}
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
        <Pagination data-testid={buildTestId('pagination')}>
          <PaginationWrapper>
            <Button
              variant="secondary"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              shape="square"
              size="increased"
              data-testid={buildTestId('pagination.previous-btn')}
            >
              {'<'}
            </Button>
            {filteredPageOptions.map((page, index) => (
              <>
                <PageNumberButton
                  variant={page === pageIndex ? 'primary' : 'secondary'}
                  onClick={() => gotoPage(page)}
                  shape="fit"
                  size="increased"
                  data-testid={buildTestId(`pagination.go-to-${page}-btn`)}
                >
                  {page + 1}
                </PageNumberButton>
                {typeof filteredPageOptions[index + 1] === 'number' &&
                  filteredPageOptions[index + 1] !== page + 1 && (
                    <PaginationEllipsis data-testid={buildTestId(`pagination.${page}.ellipsis`)}>
                      …
                    </PaginationEllipsis>
                  )}
              </>
            ))}
            <Button
              variant="secondary"
              onClick={() => nextPage()}
              disabled={!canNextPage}
              shape="square"
              size="increased"
              data-testid={buildTestId('pagination.next-btn')}
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
