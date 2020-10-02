import React, { useCallback, useMemo, useState } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Accordion } from '../Accordion';
import { Drawer } from '../Drawer';
import { Icon } from '../Icon';
import { sizes, useWindowSize } from '../internal/useWindowSize';
import { ListItem } from '../ListItem';

import { renderHeaderItems } from './renderHeaderItems';
import { renderPanels } from './renderPanels';
import { Styled, LeftContainer, Logo, Left, Right, Item } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'children'> &
  Testable & {
    logo?: React.ReactNode;
    left?: HeaderItem[];
    right?: HeaderItem[];
  };

export type HeaderItem = Omit<
  React.ComponentPropsWithoutRef<typeof ListItem>,
  'showCaretRight' | 'children' | 'target'
> & {
  target: React.ReactNode;
  children?: HeaderItem[];
  isStyled?: boolean;
};

export type Panels = React.ComponentPropsWithoutRef<typeof Accordion>['panels'];

export const Component = ({ logo, left, right, 'data-testid': testId, ...otherProps }: Props) => {
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

  const isMd = useMemo(() => width < sizes.lg || height < sizes.lg, [width, height]);
  const isSm = useMemo(() => width < sizes.md || height < sizes.md, [width, height]);

  const renderDrawer = useMemo(
    () => (items: HeaderItem[]) => (
      <>
        <Item showBorder={false} onClick={toggleDrawer}>
          <Icon.HamburgerMenu />
        </Item>
        <Drawer open={open} onClose={toggleDrawer}>
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

  const rightElement = useMemo(() => {
    let rightHeaderItems: HeaderItem[] = [];
    if (right && right.length > 0) rightHeaderItems = right;

    let leftHeaderItems: HeaderItem[] = [];
    if (left && left.length > 0) leftHeaderItems = left;

    if (isSm) {
      return <>{renderDrawer([...leftHeaderItems, ...rightHeaderItems])}</>;
    }

    if (isMd) {
      return <>{renderDrawer(rightHeaderItems)}</>;
    }

    return <Right data-testid={buildTestId('right')}>{renderHeaderItems(rightHeaderItems)}</Right>;
  }, [left, right, isSm, isMd, renderDrawer, buildTestId]);

  const leftElement = useMemo(() => {
    if (!left || left.length === 0 || isSm) return null;

    return <Left data-testid={buildTestId('left')}>{renderHeaderItems(left)}</Left>;
  }, [left, isSm, buildTestId]);

  return (
    <Styled {...otherProps} data-testid={buildTestId()}>
      <LeftContainer>
        {logo && <Logo data-testid={buildTestId('logo')}>{logo}</Logo>}
        {leftElement}
      </LeftContainer>
      {rightElement}
    </Styled>
  );
};

Component.displayName = 'Header';

Component.Left = Left;
Component.Right = Right;
