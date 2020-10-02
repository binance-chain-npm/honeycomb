import React from 'react';

import { Dropdown } from '../../Dropdown';
import { HeaderItem } from '../component';
import { StyledDefaultTarget, StyledListItem } from '../styled';

export const renderHeaderItems = (items: HeaderItem[], isDropdownItem = false) => {
  return items.map((it, index) => {
    const { children, target, ...otherItemProps } = it;
    const isElement = typeof target !== 'string';

    if (!children) {
      if (isDropdownItem) {
        return <Dropdown.Item key={index}>{target}</Dropdown.Item>;
      }

      if (isElement) {
        return <React.Fragment key={index}>{target}</React.Fragment>;
      }

      return (
        <StyledListItem key={index} {...otherItemProps} showBorder={!!otherItemProps.showBorder}>
          {target}
        </StyledListItem>
      );
    }

    return (
      <Dropdown key={index} target={<StyledDefaultTarget>{target}</StyledDefaultTarget>}>
        {renderHeaderItems(children, true)}
      </Dropdown>
    );
  });
};
