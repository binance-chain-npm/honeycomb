import React, { useState, useCallback, useMemo } from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { Space } from '../../Space';
import { TextInput } from '../../TextInput';

import { Content, Header } from './styled';

export type Props = Testable & {
  children?: React.ReactNode;
};

export const Component = ({ 'data-testid': testId, children }: Props) => {
  const buildTestId = useBuildTestId(testId);
  const [search, setSearch] = useState('');
  const updateSearch = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => setSearch(evt.target.value),
    [],
  );

  const lowerCaseSearch = useMemo(() => search.toLowerCase(), [search]);

  const filteredResults = useMemo(
    () =>
      React.Children.toArray(children).filter((it) => {
        if (!React.isValidElement<{ searchAs: string[] | string }>(it)) return false;

        const { searchAs } = it.props;
        if (!searchAs) return false;

        if (typeof searchAs === 'string') {
          return searchAs.toLowerCase().includes(lowerCaseSearch);
        }

        if (Array.isArray(searchAs)) {
          return !!searchAs.find((search) => search.toLowerCase().includes(lowerCaseSearch));
        }

        return false;
      }),
    [children, lowerCaseSearch],
  );

  return (
    <>
      <Header>
        <TextInput value={search} onChange={updateSearch} data-testid={buildTestId('input')} />
      </Header>
      <Space size="increased" />
      <Content>{filteredResults}</Content>
      <Space size="increased" />
    </>
  );
};

Component.displayName = 'PickOne';
