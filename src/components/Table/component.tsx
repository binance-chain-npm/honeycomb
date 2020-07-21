import React from 'react';
import { useTable, TableOptions } from 'react-table';

import { Container, Scroll, Table, Thead, TheadTr, Th } from './styled';

export type Props<Data extends object> = {
  data: TableOptions<Data>['data'];
  columns: TableOptions<Data>['columns'];
};

export const Component = <Data extends object>({ data, columns }: Props<Data>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

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
