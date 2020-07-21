import React, { useMemo } from 'react';
import { useTable } from 'react-table';

import { Container, Scroll, Table } from './styled';

export const Component = () => {
  const data = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      } as const,
      {
        col1: 'react-table',
        col2: 'rocks',
      } as const,
      {
        col1: 'whatever',
        col2: 'you want',
      } as const,
    ],
    [],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1',
      } as const,
      {
        Header: 'Column 2',
        accessor: 'col2',
      } as const,
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <Container>
      <Scroll>
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Scroll>
    </Container>
  );
};

Component.displayName = 'Table';
