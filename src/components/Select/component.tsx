import React, { useCallback, useMemo, useState } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Card } from '../Card';
import { Space } from '../Space';
import { TextInput } from '../TextInput';

import { DropdownSelect } from './variant/DropdownSelect';
import { ModalSelect } from './variant/ModalSelect';
import { ResponsiveSelect } from './variant/ResponsiveSelect';
import { Container, OptionsContainer, Search, Options, OptionsTitle } from './styled';

export const VARIANTS = ['responsive', 'dropdown', 'modal'] as const;
export type Variant = typeof VARIANTS[number];

export type Props = Pick<React.HTMLProps<HTMLElement>, 'children'> &
  Testable & {
    variant?: Variant;
    title?: React.ReactNode;
    optionsTitle?: React.ReactNode;
    open: boolean;
    target: React.ReactNode;
    onClose?: () => void;
  };

export const Component = ({
  variant = 'responsive',
  children,
  optionsTitle,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const [search, setSearch] = useState('');
  const updateSearch = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => setSearch(evt.target.value),
    [],
  );

  const lowerCaseSearch = useMemo(() => search.toLowerCase(), [search]);

  const filterableChildren = useMemo(() => {
    let hasError = false;

    const res = React.Children.toArray(children).flatMap((it) => {
      if (React.isValidElement<{ searchAs?: string[] | string }>(it)) {
        if (it.props.searchAs && it.props.searchAs.length > 0) {
          return [it];
        }

        hasError = true;
      }

      return [];
    });

    if (process.env.NODE_ENV !== 'production' && hasError) {
      console.error('Select has filterable children with an invalid "searchAs" prop');
    }

    return res;
  }, [children]);

  const filteredResults = useMemo(
    () =>
      filterableChildren.filter((it) => {
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
    [filterableChildren, lowerCaseSearch],
  );

  const isFilterable = useMemo(() => filterableChildren.length > 0, [filterableChildren]);

  const content = useMemo(() => {
    return (
      <Container>
        {isFilterable && (
          <Card position="top">
            <Search>
              <TextInput
                value={search}
                onChange={updateSearch}
                data-testid={buildTestId('input')}
              />
            </Search>
          </Card>
        )}
        <Space size="normal" />
        {optionsTitle && <OptionsTitle>{optionsTitle}</OptionsTitle>}
        <Space size="normal" />
        <OptionsContainer position="bottom">
          <Options data-testid={buildTestId('options')}>{isFilterable ? filteredResults : children}</Options>
        </OptionsContainer>
      </Container>
    );
  }, [isFilterable, filteredResults, children, optionsTitle, search, updateSearch, buildTestId]);

  switch (variant) {
    case 'dropdown':
      return (
        <DropdownSelect {...otherProps} data-testid={buildTestId()}>
          {content}
        </DropdownSelect>
      );
    case 'modal':
      return (
        <ModalSelect {...otherProps} data-testid={buildTestId()}>
          {content}
        </ModalSelect>
      );
    default:
      return (
        <ResponsiveSelect {...otherProps} data-testid={buildTestId()}>
          {content}
        </ResponsiveSelect>
      );
  }
};

Component.displayName = 'Select';
