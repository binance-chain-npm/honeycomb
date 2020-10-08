import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { Accordion } from '../../Accordion';
import { Drawer } from '../../Drawer';
import { Icon } from '../../Icon';
import { Space } from '../../Space';
import { HeaderItem, Panels } from '../component';
import { Item } from '../styled';

import {
  PanelElementItem,
  PanelContainer,
  PanelItem,
  PanelDropdownContainer,
  PanelDropdownItem,
} from './styled';

export type Props = Pick<React.ComponentPropsWithoutRef<typeof Drawer>, 'open' | 'onClose'> &
  Pick<React.ComponentPropsWithoutRef<typeof Accordion>, 'activePanel' | 'onChange'> &
  Testable & {
    items: HeaderItem[];
  };

export const Component = ({
  items,
  open,
  activePanel,
  onClose,
  onChange,
  'data-testid': testId,
}: Props) => {
  const buildTestId = useBuildTestId(testId);

  const panels: Panels = useMemo(() => {
    return items.map((it, index) => {
      const { children, target, isStyled, ...otherItemProps } = it;

      const targetKey = `panel-${index}`;
      const hasChildren = !!children && children.length > 0;

      return {
        target: isStyled ? (
          <PanelElementItem key={targetKey}>{target}</PanelElementItem>
        ) : (
          <PanelContainer showBorder={false} key={targetKey} {...otherItemProps}>
            <PanelItem hasChildren={hasChildren}>
              {target}
              {hasChildren && (
                <>
                  <Space size="micro" />
                  {activePanel === index ? <Icon.TriangleUp /> : <Icon.TriangleDown />}
                </>
              )}
            </PanelItem>
          </PanelContainer>
        ),
        children: (
          <>
            {children?.map((child, indexChild) => (
              <PanelDropdownContainer
                showBorder={false}
                key={`panel-${index}-${indexChild}`}
                {...otherItemProps}
              >
                <PanelDropdownItem>{child.target}</PanelDropdownItem>
              </PanelDropdownContainer>
            ))}
          </>
        ),
      };
    });
  }, [items, activePanel]);

  return (
    <>
      <Item showBorder={false} onClick={onClose} isMenu data-testid={buildTestId('menu')}>
        <Icon.HamburgerMenu />
      </Item>
      <Drawer open={open} onClose={onClose} data-testid={buildTestId('drawer')}>
        <Accordion
          panels={panels}
          activePanel={activePanel}
          onChange={onChange}
          data-testid={buildTestId('accordion')}
        />
      </Drawer>
    </>
  );
};

Component.displayName = 'HeaderItems';