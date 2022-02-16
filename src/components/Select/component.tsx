import React, { forwardRef, useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { FixedSizeList } from 'react-window';
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
  OptionContainer as DefaultOptionContainer,
  OptionTitle,
} from './styled';
import { useCurrentVariant } from './useCurrentVariant';

export const VARIANTS = ['responsive', 'dropdown', 'modal'] as const;
export type Variant = typeof VARIANTS[number];

const DEFAULT_OPTION_CONTAINER_HEIGHT = 364;
const DEFAULT_OPTION_ITEM_HEIGHT = 52;

export type Props = Pick<React.HTMLProps<HTMLElement>, 'children'> &
  Testable & {
    variant?: Variant;
    title?: React.ReactNode;
    optionTitle?: React.ReactNode;
    optionContainerElement?: React.ReactNode;
    optionContainerHeight?: number;
    optionItemHeight?: number;
    search?: React.ComponentProps<typeof TextInput>['value'];
    onChangeSearch?: React.ComponentProps<typeof TextInput>['onChange'];
    searchIcon?: boolean;
    searchPlaceholder?: string;
    showSearch?: boolean;
    target: React.ReactNode;
    open?: boolean;
    onClose?: () => void;
    closeTimeoutMS?: number;
  };

export const Component = ({
  variant = 'responsive',
  children,
  optionTitle,
  optionContainerElement: optionContainerElementProp,
  optionContainerHeight,
  optionItemHeight = DEFAULT_OPTION_ITEM_HEIGHT,
  search: searchProp,
  onChangeSearch,
  searchIcon = true,
  searchPlaceholder,
  showSearch,
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

  const { items, itemCount } = useMemo(() => {
    if (filterable) return { items: filteredResults, itemCount: filteredResults.length };
    const items = React.Children.toArray(children) as React.ReactElement[];
    return { items, itemCount: items.length };
  }, [children, filterable, filteredResults]);

  const row = useCallback(
    ({ index, style }: { index: number; style: React.CSSProperties }) => {
      return <div style={style}>{items[index]}</div>;
    },
    [items],
  );

  const OptionContainer = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (props, ref) => {
      if (React.isValidElement(optionContainerElementProp)) {
        return React.cloneElement(optionContainerElementProp, { ...props, ref });
      }
      return <DefaultOptionContainer {...props} as="div" ref={ref} />;
    },
  );
  const [prevItems, setPrevItems] = useState(items);
  const [prevSearch, setPrevSearch] = useState(search);
  const scrollOffsetRef = useRef(0);
  const [initialScrollOffset, setInitialScrollOffset] = useState(0);
  const content = useMemo(() => {
    if (prevItems !== items) {
      setInitialScrollOffset(scrollOffsetRef.current);
      setPrevItems(items);
    }
    if (prevSearch !== search) {
      setInitialScrollOffset(0);
      setPrevSearch(search);
    }
    return (
      <Container>
        {(filterable || showSearch) && (
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
        {optionTitle && <OptionTitle>{optionTitle}</OptionTitle>}
        <Space size="small" />
        <OptionContainer data-testid={buildTestId('options')}>
          {filterable ? (
            <FixedSizeList
              initialScrollOffset={initialScrollOffset}
              onScroll={({ scrollOffset }) => {
                scrollOffsetRef.current = scrollOffset;
              }}
              width="100%"
              height={Math.min(
                optionContainerHeight ?? DEFAULT_OPTION_CONTAINER_HEIGHT,
                itemCount * (optionItemHeight ?? DEFAULT_OPTION_ITEM_HEIGHT),
              )}
              itemCount={itemCount}
              itemSize={optionItemHeight}
            >
              {row}
            </FixedSizeList>
          ) : (
            items
          )}
        </OptionContainer>
      </Container>
    );
  }, [
    buildTestId,
    filterable,
    itemCount,
    items,
    prevItems,
    initialScrollOffset,
    optionContainerHeight,
    optionItemHeight,
    optionTitle,
    row,
    search,
    prevSearch,
    searchIcon,
    searchPlaceholder,
    showSearch,
    theme.honeycomb.size.increased,
    theme.honeycomb.color.text.placeholder,
    updateSearch,
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
