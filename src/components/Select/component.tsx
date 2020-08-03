import React, { useCallback, useMemo, useState } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Space } from '../Space';
import { TextInput } from '../TextInput';

import { DropdownSelect } from './variant/DropdownSelect';
import { ModalSelect } from './variant/ModalSelect';
import { Search, Options } from './styled';

export type Props = Pick<React.HTMLProps<HTMLElement>, 'children'> &
  Testable & {
    variant?: React.ReactNode;
    title?: React.ReactNode;
    open: boolean;
    toggleOpen?: () => void;
    // Dropdown.
    renderSelected?: () => React.ReactNode;
  };

export const variants = ['dropdown', 'modal'] as const;
export type Variant = typeof variants[number];

export const Component = ({
  'data-testid': testId,
  variant = 'dropdown',
  children,
  ...otherProps
}: Props) => {
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

  const content = (
    <>
      <Search>
        <TextInput value={search} onChange={updateSearch} data-testid={buildTestId('input')} />
      </Search>
      <Space size="increased" />
      <Options>{filteredResults}</Options>
      <Space size="increased" />
    </>
  );

  switch (variant) {
    case 'modal':
      return (
        <ModalSelect {...otherProps} data-testid={buildTestId()} onClose={otherProps.toggleOpen}>
          {content}
        </ModalSelect>
      );
    default:
      return (
        <DropdownSelect {...otherProps} data-testid={buildTestId()}>
          {content}
        </DropdownSelect>
      );
  }
};

Component.displayName = 'Select';
