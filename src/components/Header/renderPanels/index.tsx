import React from 'react';

import { Icon } from '../../Icon';
import { Space } from '../../Space';
import { HeaderItem, Panels } from '../component';

import {
  PanelElementItem,
  PanelContainer,
  PanelItem,
  PanelDropdownContainer,
  PanelDropdownItem,
} from './styled';

export const renderPanels = (items: HeaderItem[], activePanel: number): Panels => {
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
};
