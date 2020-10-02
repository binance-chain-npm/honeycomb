import React, { useCallback, useMemo, useState } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Accordion } from '../Accordion';
import { Drawer } from '../Drawer';
import { Icon } from '../Icon';
import { sizes, useWindowSize } from '../internal/useWindowSize';
import { ListItem } from '../ListItem';

import { renderHeaderItems } from './renderHeaderItems';
import { renderPanels } from './renderPanels';
import { Styled, StyledListItem, LeftContainer, Logo, Left, Right } from './styled';

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
  target: React.ReactElement | string;
  children?: HeaderItem[];
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

  const isMd = useMemo(() => width < sizes.md || height < sizes.md, [width, height]);

  const rightElement = useMemo(() => {
    if (!right || right.length === 0) return null;

    if (isMd) {
      return (
        <>
          <StyledListItem showBorder={false} onClick={toggleDrawer}>
            <Icon.HamburgerMenu />
          </StyledListItem>
          <Drawer open={open} onClose={toggleDrawer}>
            <Accordion
              panels={renderPanels(right)}
              activePanel={activePanel}
              onChange={changePanel}
              data-testid={'accordion'}
            />
          </Drawer>
        </>
      );
    }

    return <Right data-testid={buildTestId('right')}>{renderHeaderItems(right)}</Right>;
  }, [right, activePanel, open, isMd, toggleDrawer, buildTestId, changePanel]);

  return (
    <Styled {...otherProps} data-testid={buildTestId()}>
      <LeftContainer>
        {logo && <Logo data-testid={buildTestId('logo')}>{logo}</Logo>}
        {left && left.length > 0 && (
          <Left data-testid={buildTestId('left')}>{renderHeaderItems(left)}</Left>
        )}
      </LeftContainer>
      {rightElement}
    </Styled>
  );
};

Component.displayName = 'Header';

Component.Left = Left;
Component.Right = Right;
