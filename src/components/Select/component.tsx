import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Icon } from '../Icon';
import { Space } from '../Space';
import { TextInput } from '../TextInput';

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
    search?: React.ComponentProps<typeof TextInput>['value'];
    onChangeSearch?: React.ComponentProps<typeof TextInput>['onChange'];
    searchIcon?: boolean;
    searchPlaceholder?: string;
    target: React.ReactNode;
    open?: boolean;
    onClose?: () => void;
  };

export const Component = ({
  variant = 'responsive',
  children,
  optionsTitle,
  search: searchProp,
  onChangeSearch,
  searchIcon = true,
  searchPlaceholder,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const theme = useTheme();
  const currentVariant = useCurrentVariant({ variant });

  const controlled = useMemo(() => typeof searchProp !== 'undefined' && !!onChangeSearch, [
    onChangeSearch,
    searchProp,
  ]);

  const [search, setSearch] = useState(searchProp ? (searchProp as string) : '');

  useEffect(() => {
    if (!controlled) return;
    setSearch(searchProp as string);
  }, [controlled, searchProp]);

  const updateSearch = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (!controlled) {
        setSearch(evt.target.value);
      } else {
        onChangeSearch?.(evt);
      }
    },
    [controlled, onChangeSearch],
  );

  const context = useMemo(
    () => ({ open: otherProps.open, onClose: otherProps.onClose, variant, testId }),
    [otherProps.open, otherProps.onClose, variant, testId],
  );

  const lowerCaseSearch = useMemo(() => search.toLowerCase(), [search]);

  const { filterable, filterableChildren } = useMemo(() => {
    const items = React.Children.toArray(children);
    const filterableChildren = items.flatMap((it) => {
      if (React.isValidElement<{ searchAs?: string[] | string }>(it)) {
        if (it.props.searchAs && it.props.searchAs.length > 0) {
          return [it];
        }
      }

      return [];
    });

    const filterable = (() => {
      if (filterableChildren.length === 0 && items.length !== 0) return false;
      return items.length === filterableChildren.length;
    })();

    if (
      process.env.NODE_ENV !== 'production' &&
      filterableChildren.length !== 0 &&
      items.length !== filterableChildren.length
    ) {
      console.error(
        'Select has children with mixed "searchAs" prop. Either add a valid "searchAs" to all children or remove the prop.',
      );
    }

    return { filterable, filterableChildren };
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

  const content = useMemo(() => {
    return (
      <Container>
        {filterable && (
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
                ) : undefined
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
            {filterable ? filteredResults : children}
          </Options>
        </OptionsContainer>
      </Container>
    );
  }, [
    filterable,
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
