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
  return items.map((it, indexPanel) => {
    const { children, target, isStyled, ...otherItemProps } = it;

    const targetKey = `panel-${indexPanel}`;

    return {
      target: isStyled ? (
        <PanelElementItem key={targetKey}>{target}</PanelElementItem>
      ) : (
        <PanelContainer showBorder={false} key={targetKey} {...otherItemProps}>
          <PanelItem>
            {target}
            <Space size="micro" />
            {children && (activePanel === indexPanel ? <Icon.TriangleUp /> : <Icon.TriangleDown />)}
          </PanelItem>
        </PanelContainer>
      ),
      children: (
        <>
          {children?.map((child, indexPanelChild) => (
            <PanelDropdownContainer
              showBorder={false}
              key={`panel-${indexPanel}-${indexPanelChild}`}
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
