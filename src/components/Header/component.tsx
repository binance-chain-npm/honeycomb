import React, { useCallback, useMemo, useState } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Accordion } from '../Accordion';
import { Drawer } from '../Drawer';
import { Icon } from '../Icon';
import { sizes, useWindowSize } from '../internal/useWindowSize';
import { ListItem } from '../ListItem';

import { renderPanels } from './renderPanels';
import {
  Styled,
  LeftContainer,
  Logo,
  Item,
  LeftHeaderItems,
  RightHeaderItems,
  NonCollapsibleHeaderItems,
} from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'children'> &
  Testable & {
    logo?: React.ReactNode;
    left?: HeaderItem[];
    right?: HeaderItem[];
    nonCollapsible?: HeaderItem[];
  };

export type HeaderItem = Omit<
  React.ComponentPropsWithoutRef<typeof ListItem>,
  'showCaretRight' | 'children' | 'target'
> & {
  target: React.ReactNode;
  children?: HeaderChildItem[];
  isStyled?: boolean;
};

export type HeaderChildItem = Omit<HeaderItem, 'children' | 'type'> & {
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
  const buildTestId = useBuildTestId(testId);
  const [open, setOpen] = useState(false);
  const [activePanel, setActivePanel] = useState(-1);

  const { width, height } = useWindowSize();

  const toggleDrawer = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  const changePanel = useCallback((index) => {
    setActivePanel((prev) => (prev === index ? -1 : index));
  }, []);

  const isMd = useMemo(() => width < sizes.lg || height < sizes.md, [width, height]);
  const isSm = useMemo(() => width < sizes.md || height < sizes.sm, [width, height]);

  const renderDrawer = useMemo(
    () => (items: HeaderItem[]) => (
      <>
        <Item showBorder={false} onClick={toggleDrawer} isMenu data-testid={buildTestId('menu')}>
          <Icon.HamburgerMenu />
        </Item>
        <Drawer open={open} onClose={toggleDrawer} data-testid={buildTestId('drawer')}>
          <Accordion
            panels={renderPanels(items, activePanel)}
            activePanel={activePanel}
            onChange={changePanel}
            data-testid={buildTestId('accordion')}
          />
        </Drawer>
      </>
    ),
    [open, activePanel, toggleDrawer, changePanel, buildTestId],
  );

  const rightHeaderItems = useMemo(() => {
    let rightElements: HeaderItem[] = [];
    if (right && right.length > 0) rightElements = right;

    let leftElements: HeaderItem[] = [];
    if (left && left.length > 0) leftElements = left;

    if (isSm) {
      return <>{renderDrawer([...leftElements, ...rightElements])}</>;
    }

    if (isMd) {
      return <>{renderDrawer(rightElements)}</>;
    }

    return <RightHeaderItems items={rightElements} data-testid={buildTestId('right')} />;
  }, [left, right, isSm, isMd, renderDrawer, buildTestId]);

  const leftHeaderItems = useMemo(() => {
    if (!left || left.length === 0 || isSm) return null;

    return <LeftHeaderItems items={left} data-testid={buildTestId('left')} />;
  }, [left, isSm, buildTestId]);

  const nonCollapsibleHeaderItems = useMemo(() => {
    if (!nonCollapsible || nonCollapsible.length === 0) return null;

    return (
      <NonCollapsibleHeaderItems
        items={nonCollapsible}
        data-testid={buildTestId('non-collapsible')}
      />
    );
  }, [nonCollapsible, buildTestId]);

  return (
    <Styled {...otherProps} data-testid={buildTestId()}>
      <LeftContainer>
        {logo && <Logo data-testid={buildTestId('logo')}>{logo}</Logo>}
        {leftHeaderItems}
      </LeftContainer>
      {rightHeaderItems}
      {nonCollapsibleHeaderItems}
    </Styled>
  );
};

Component.displayName = 'Header';
