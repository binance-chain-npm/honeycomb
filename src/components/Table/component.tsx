import React, { useMemo, useCallback, useEffect } from 'react';
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
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  hasPagination?: boolean;
  hasHeader?: boolean;
  interactive?: boolean;
  setPageIndex?: (params: { pageIndex: number }) => void;
};

export const Component = <Data extends object>({
  data,
  columns,
  pageIndex = 0,
  pageSize = 10,
  hasPagination = false,
  hasHeader = true,
  interactive = false,
  setPageIndex,
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
    pageOptions,
    pageCount,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex, pageSize },
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

  const navigate = useCallback(
    (page: number) => {
      setPageIndex?.({ pageIndex: page });
    },
    [setPageIndex],
  );

  useEffect(() => {
    if (isControlled && pageIndex !== 0 && pageIndex >= pageCount) {
      navigate(0);
    }
  }, [isControlled, pageCount, pageIndex, navigate]);

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
            {(isControlled ? page : rows).map((row) => {
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
