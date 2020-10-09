import React, { useCallback, useMemo } from 'react';

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
      const { children, target, isStyled, onClick, ...otherItemProps } = it;

      const targetKey = `panel-${index}`;
      const hasChildren = !!children && children.length > 0;

      return {
        target: isStyled ? (
          <PanelElementItem key={targetKey}>
            <div onClick={(evt) => clickPanelItem(evt)}>{target}</div>
          </PanelElementItem>
        ) : (
          <PanelContainer
            showBorder={false}
            key={targetKey}
            onClick={(evt) => clickPanelItem(evt, hasChildren, onClick)}
            {...otherItemProps}
          >
            <PanelItem hasChildren={hasChildren}>
              {target}
              {hasChildren && (
                <>
                  <Space size="micro" />
                  {activePanel === index ? (
                    <Icon.TriangleUp onClick={(evt) => stopPropagation(evt, index)} />
                  ) : (
                    <Icon.TriangleDown onClick={(evt) => stopPropagation(evt, index)} />
                  )}
                </>
              )}
            </PanelItem>
          </PanelContainer>
        ),
        children: (
          <>
            {children?.map((child, indexChild) => {
              const { target, onClick, ...otherItemProps } = child;

              return (
                <PanelDropdownContainer
                  key={`panel-${index}-${indexChild}`}
                  onClick={(evt) => clickPanelItem(evt, false, onClick)}
                  {...otherItemProps}
                  showBorder={false}
                >
                  <PanelDropdownItem>{target}</PanelDropdownItem>
                </PanelDropdownContainer>
              );
            })}
          </>
        ),
      };
    });
  }, [items, activePanel, stopPropagation, clickPanelItem]);

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
