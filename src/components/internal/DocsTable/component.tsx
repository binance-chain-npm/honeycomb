import React from 'react';

import { Table } from '../../Table';

import { Styled, Asterisk } from './styled';

export type Props = Omit<React.ComponentPropsWithoutRef<typeof Table>, 'columns'>;

const COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name',
  } as const,
  {
    Header: 'Type',
    accessor: 'type',
  } as const,
  {
    Header: 'Default',
    accessor: 'default',
  } as const,
  {
    Header: 'Description',
    accessor: 'description',
  } as const,
];

export const Component = ({ ...otherProps }: Props) => <Styled {...otherProps} columns={COLUMNS} />;

Component.displayName = 'DocsTable';

Component.Asterisk = Asterisk;
