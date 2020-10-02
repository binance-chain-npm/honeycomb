import React from 'react';

import { HeaderItem, Panels } from '../component';

import {
  PanelElementItem,
  PanelContainer,
  PanelItem,
  PanelDropdownContainer,
  PanelDropdownItem,
} from './styled';

export const renderPanels = (items: HeaderItem[]): Panels => {
  return items.map((it, indexPanel) => {
    const { children, target, ...otherItemProps } = it;
    const isElement = typeof target !== 'string';

    const targetKey = `panel-${indexPanel}`;

    return {
      target: isElement ? (
        <PanelElementItem key={targetKey}>{target}</PanelElementItem>
      ) : (
        <PanelContainer showBorder={false} key={targetKey} {...otherItemProps}>
          <PanelItem>{target}</PanelItem>
        </PanelContainer>
      ),
      children: (
        <>
          {it.children?.map((child, indexPanelChild) => (
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
