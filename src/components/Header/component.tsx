import React, { useCallback, useMemo, useState } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Accordion } from '../Accordion';
import { useWindowSize } from '../internal/useWindowSize';
import { ListItem } from '../ListItem';

import { HeaderDrawer } from './HeaderDrawer';
import {
  Styled,
  LeftContainer,
  Logo,
  LeftHeaderItems,
  RightHeaderItems,
  NonCollapsibleHeaderItems,
} from './styled';

export type Props = Testable & {
  logo?: React.ReactNode;
  left?: HeaderItem[];
  right?: HeaderItem[];
  nonCollapsible?: NonCollapsibleHeaderItem[];
};

export type HeaderItem = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> &
  Pick<React.ComponentPropsWithoutRef<typeof ListItem>, 'htmlTag'> &
  Testable & {
    element: React.ReactNode;
    children?: HeaderChildItem[];
    styled?: boolean;
  };

export type NonCollapsibleHeaderItem = HeaderItem & {
  collapseOn?: 'sm' | 'md';
};

export type HeaderChildItem = Pick<HeaderItem, 'element' | 'styled'> &
  Omit<React.ComponentPropsWithoutRef<typeof ListItem>, 'children'> & {
    label?: React.ReactNode;
  };

export type Panels = React.ComponentPropsWithoutRef<typeof Accordion>['panels'];

export const Component = ({
  logo,
  left,
  right,
  nonCollapsible,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const [open, setOpen] = useState(false);
  const [activePanel, setActivePanel] = useState(-1);

  const { isSm, isMd } = useWindowSize();

  const toggleDrawer = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  const changePanel = useCallback((index) => {
    setActivePanel((prev) => (prev === index ? -1 : index));
  }, []);

  const rightHeaderItems = useMemo(() => {
    let rightElements: HeaderItem[] = [];
    if (right && right.length > 0) rightElements = right;

    let leftElements: HeaderItem[] = [];
    if (left && left.length > 0) leftElements = left;

    let nonCollapsibleElements: NonCollapsibleHeaderItem[] = [];
    if (nonCollapsible) {
      const collapsible = nonCollapsible.filter((it) => !!it.collapseOn);

      if (collapsible.length > 0) {
        nonCollapsibleElements = collapsible;
      }
    }

    if (isSm) {
      return (
        <HeaderDrawer
          items={[...leftElements, ...rightElements, ...nonCollapsibleElements]}
          open={open}
          activePanel={activePanel}
          onChange={changePanel}
          onClose={toggleDrawer}
          data-testid={buildTestId()}
        />
      );
    }

    if (isMd) {
      return (
        <HeaderDrawer
          items={[
            ...rightElements,
            ...nonCollapsibleElements.filter((it) => it.collapseOn === 'md'),
          ]}
          open={open}
          activePanel={activePanel}
          onChange={changePanel}
          onClose={toggleDrawer}
          data-testid={buildTestId()}
        />
      );
    }

    return <RightHeaderItems items={rightElements} data-testid={buildTestId('right')} />;
  }, [
    left,
    right,
    nonCollapsible,
    isSm,
    isMd,
    open,
    activePanel,
    changePanel,
    toggleDrawer,
    buildTestId,
  ]);

  const leftHeaderItems = useMemo(() => {
    if (!left || left.length === 0 || isSm) return null;

    return <LeftHeaderItems items={left} data-testid={buildTestId('left')} />;
  }, [left, isSm, buildTestId]);

  const nonCollapsibleHeaderItems = useMemo(() => {
    if (!nonCollapsible || nonCollapsible.length === 0) return null;

    let items = nonCollapsible;
    if (isMd) {
      items = nonCollapsible.filter((it) => !it.collapseOn || it.collapseOn === 'sm');
    }
    if (isSm) {
      items = nonCollapsible.filter((it) => !it.collapseOn);
    }

    return <NonCollapsibleHeaderItems items={items} data-testid={buildTestId('non-collapsible')} />;
  }, [nonCollapsible, isSm, isMd, buildTestId]);

  return (
    <Styled {...otherProps} data-testid={buildTestId()}>
      <LeftContainer>
        {logo && <Logo>{logo}</Logo>}
        {leftHeaderItems}
      </LeftContainer>
      {rightHeaderItems}
      {nonCollapsibleHeaderItems}
    </Styled>
  );
};

Component.displayName = 'Header';
