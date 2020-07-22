import React, { useMemo } from 'react';
import { useTable, TableOptions, usePagination } from 'react-table';

import { Button } from '../Button';

import {
  Container,
  Scroll,
  Table,
  Thead,
  TheadTr,
  Th,
  Tbody,
  TbodyTr,
  Td,
  Pagination,
  PaginationWrapper,
  PaginationEllipsis,
} from './styled';

export type Props<Data extends object> = {
  data: TableOptions<Data>['data'];
  columns: TableOptions<Data>['columns'];
  initialPageIndex?: number;
  pageCount?: number;
  hasPagination?: boolean;
};

export const Component = <Data extends object>({
  data,
  columns,
  initialPageIndex = 0,
  pageCount: pageCountParam,
  hasPagination = false,
}: Props<Data>) => {
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
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: initialPageIndex },
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

  return (
    <Container>
      <Scroll>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <TheadTr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
                ))}
              </TheadTr>
            ))}
          </Thead>

          <Tbody {...getTableBodyProps()}>
            {(hasPagination ? page : rows).map((row) => {
              prepareRow(row);
              return (
                <TbodyTr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>;
                  })}
                </TbodyTr>
              );
            })}
          </Tbody>
        </Table>
      </Scroll>
      {hasPagination && (
        <Pagination>
          <PaginationWrapper>
            <Button
              variant="secondary"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              shape="square"
              size="increased"
            >
              {'<'}
            </Button>
            {filteredPageOptions.map((page, index) => (
              <>
                <Button
                  variant={page === pageIndex ? 'primary' : 'secondary'}
                  onClick={() => gotoPage(page)}
                  shape="square"
                  size="increased"
                >
                  {page + 1}
                </Button>
                {typeof filteredPageOptions[index + 1] === 'number' &&
                  filteredPageOptions[index + 1] !== page + 1 && (
                    <PaginationEllipsis>…</PaginationEllipsis>
                  )}
              </>
            ))}
            <Button
              variant="secondary"
              onClick={() => nextPage()}
              disabled={!canNextPage}
              shape="square"
              size="increased"
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
