import React from 'react';
import { useTable, TableOptions } from 'react-table';

import { Container, Scroll, Table, Thead, TheadTr, Th, Tbody, TbodyTr, Td } from './styled';

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

          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
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
    </Container>
  );
};

Component.displayName = 'Table';
