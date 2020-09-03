import React, { useCallback, useMemo, useState } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Card } from '../Card';
import { Space } from '../Space';
import { TextInput } from '../TextInput';

import { DropdownSelect } from './variant/DropdownSelect';
import { Container, OptionsContainer, Search, Options, OptionsTitle } from './styled';

export type Props = Pick<React.HTMLProps<HTMLElement>, 'children'> &
  Testable & {
    title?: React.ReactNode;
    optionsTitle?: React.ReactNode;
    open: boolean;
    target: React.ReactNode;
    onClose?: () => void;
  };

export const Component = ({
  children,
  optionsTitle,
  'data-testid': testId,
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

  return (
    <DropdownSelect {...otherProps} data-testid={buildTestId()}>
      <Container>
        <Card position="top">
          <Search>
            <TextInput value={search} onChange={updateSearch} data-testid={buildTestId('input')} />
          </Search>
        </Card>
        <Space size="normal" />
        {optionsTitle && <OptionsTitle>{optionsTitle}</OptionsTitle>}
        <Space size="normal" />
        <OptionsContainer position="bottom">
          <Options>{filteredResults}</Options>
        </OptionsContainer>
      </Container>
    </DropdownSelect>
  );
};

Component.displayName = 'Select';
