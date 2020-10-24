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
  hasHeader?: boolean;
  interactive?: boolean;
  onPageIndexChange?: (params: { pageIndex: number }) => void;
};

export const Component = <Data extends object>({
  data,
  columns,
  initialPageIndex = 0,
  pageSize = 10,
  hasPagination = false,
  hasHeader = true,
  interactive = false,
  onPageIndexChange,
  'data-testid': testId,
  ...otherProps
}: Props<Data>) => {
  const buildTestId = useBuildTestId(testId);
  const buildTestIdPagination = useBuildTestId(buildTestId('pagination'));

  const isControlled = useMemo(() => typeof otherProps.pageCount === 'number', [
    otherProps.pageCount,
  ]);

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
      initialState: { pageIndex: initialPageIndex },
      manualPagination: isControlled,
      pageCount: otherProps.pageCount,
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
    if (isControlled && pageIndex !== 0 && pageIndex >= pageCount) {
      gotoPage(0);
      return;
    }

    onPageIndexChange?.({ pageIndex });
  }, [isControlled, pageCount, pageIndex, onPageIndexChange, gotoPage]);

  useEffect(() => {
    if (!pageSize) return;
    setPageSize(pageSize);
  }, [pageSize, setPageSize]);

  return (
    <Container data-testid={buildTestId()}>
      <Scroll>
        <Table {...getTableProps()}>
          {hasHeader && (
            <Thead>
              {headerGroups.map((headerGroup) => (
                <TheadTr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <Th {...column.getHeaderProps()} data-testid={buildTestId(`${column.id}.th`)}>
                      {column.render('Header')}
                    </Th>
                  ))}
                </TheadTr>
              ))}
            </Thead>
          )}

          <tbody {...getTableBodyProps()}>
            {(hasPagination ? page : rows).map((row) => {
              prepareRow(row);
              return (
                <TbodyTr {...row.getRowProps()} interactive={interactive}>
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
              onClick={previousPage}
              disabled={!canPreviousPage}
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
                  onClick={() => gotoPage(page)}
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
              onClick={nextPage}
              disabled={!canNextPage}
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
