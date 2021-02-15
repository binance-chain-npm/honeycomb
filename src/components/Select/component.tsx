import React, { useCallback, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Space } from '../Space';
import { Icon } from '../Icon';

import { Context } from './context';
import { DropdownSelect } from './variant/DropdownSelect';
import { ModalSelect } from './variant/ModalSelect';
import {
  Container,
  StyledCard,
  StyledTextInput,
  OptionsContainer,
  OptionsTitle,
  Options,
} from './styled';
import { useCurrentVariant } from './useCurrentVariant';

export const VARIANTS = ['responsive', 'dropdown', 'modal'] as const;
export type Variant = typeof VARIANTS[number];

export type Props = Pick<React.HTMLProps<HTMLElement>, 'children'> &
  Testable & {
    variant?: Variant;
    title?: React.ReactNode;
    optionsTitle?: React.ReactNode;
    searchIcon?: boolean;
    searchPlaceholder?: string;
    open: boolean;
    target: React.ReactNode;
    onClose?: () => void;
  };

export const Component = ({
  variant = 'responsive',
  children,
  optionsTitle,
  searchIcon = true,
  searchPlaceholder,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const theme = useTheme();
  const currentVariant = useCurrentVariant({ variant });

  const [search, setSearch] = useState('');

  const updateSearch = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => setSearch(evt.target.value),
    [],
  );

  const context = useMemo(
    () => ({ isShowing: otherProps.open, onClose: otherProps.onClose, variant, testId }),
    [otherProps.open, otherProps.onClose, variant, testId],
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
          <StyledCard position="top">
            <StyledTextInput
              value={search}
              onChange={updateSearch}
              left={
                searchIcon ? (
                  <Icon.Search
                    fontSize={theme.honeycomb.size.increased}
                    color={theme.honeycomb.color.text.placeholder}
                  />
                ) : (
                  undefined
                )
              }
              placeholder={searchPlaceholder}
              data-testid={buildTestId('input')}
            />
          </StyledCard>
        )}
        <Space size="small" />
        {optionsTitle && <OptionsTitle>{optionsTitle}</OptionsTitle>}
        <Space size="small" />
        <OptionsContainer position="bottom">
          <Options data-testid={buildTestId('options')}>
            {isFilterable ? filteredResults : children}
          </Options>
        </OptionsContainer>
      </Container>
    );
  }, [
    isFilterable,
    filteredResults,
    search,
    searchIcon,
    searchPlaceholder,
    theme.honeycomb.size.increased,
    theme.honeycomb.color.text.placeholder,
    optionsTitle,
    children,
    updateSearch,
    buildTestId,
  ]);

  const select = useMemo(() => {
    if (currentVariant === 'dropdown') {
      return (
        <DropdownSelect {...otherProps} data-testid={buildTestId('dropdown')}>
          {content}
        </DropdownSelect>
      );
    }

    return (
      <ModalSelect {...otherProps} data-testid={buildTestId('modal')}>
        {content}
      </ModalSelect>
    );
  }, [content, currentVariant, otherProps, buildTestId]);

  return <Context.Provider value={context}>{select}</Context.Provider>;
};

Component.displayName = 'Select';
