import React, { useCallback, useMemo } from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { Accordion } from '../../Accordion';
import { Drawer } from '../../Drawer';
import { Dropdown } from '../../Dropdown';
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
  const { buildTestId } = useBuildTestId({ id: testId });

  const stopPropagation = useCallback(
    (evt: React.MouseEvent, index: number) => {
      evt.stopPropagation();
      onChange(index);
    },
    [onChange],
  );

  const clickPanelItem = useCallback(
    (
      evt: React.MouseEvent,
      hasChildren?: boolean,
      onClick?: (event: React.MouseEvent<any, MouseEvent>) => void,
    ) => {
      onClick?.(evt);
      if (!hasChildren) onClose?.();
    },
    [onClose],
  );

  const panels: Panels = useMemo(() => {
    return items.map((it, index) => {
      const { children, element, styled, onClick, ...otherItemProps } = it;

      const elementKey = `panel-${index}`;
      const hasChildren = !!children && children.length > 0;

      return {
        element: styled ? (
          <PanelElementItem key={elementKey}>
            <div onClick={(evt) => clickPanelItem(evt)}>{element}</div>
          </PanelElementItem>
        ) : (
          <PanelContainer
            showBorder={false}
            key={elementKey}
            onClick={(evt) => clickPanelItem(evt, hasChildren, onClick)}
            {...otherItemProps}
          >
            <PanelItem hasChildren={hasChildren}>
              {element}
              {hasChildren && (
                <>
                  <Space size="micro" />
                  <Dropdown.DefaultTarget.Icon
                    open={activePanel === index}
                    onClick={(evt) => stopPropagation(evt, index)}
                  />
                </>
              )}
            </PanelItem>
          </PanelContainer>
        ),
        children: (
          <>
            {children?.map((child, indexChild) => {
              const { element, onClick, ...otherItemProps } = child;

              return (
                <PanelDropdownContainer
                  key={`panel-${index}-${indexChild}`}
                  onClick={(evt) => clickPanelItem(evt, false, onClick)}
                  {...otherItemProps}
                  showBorder={false}
                >
                  <PanelDropdownItem>{element}</PanelDropdownItem>
                </PanelDropdownContainer>
              );
            })}
          </>
        ),
      };
    });
  }, [items, activePanel, stopPropagation, clickPanelItem]);

  if (panels.length === 0) {
    return null;
  }

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
