import React from 'react';

import { Dropdown } from '../../Dropdown';
import { HeaderItem } from '../component';
import { Item } from '../styled';

import { StyledDropdown, StyledDefaultTarget } from './styled';

export const renderHeaderItems = (items: HeaderItem[], isDropdownItem = false) => {
  return items.map((it, index) => {
    const { children, target, isStyled, ...otherItemProps } = it;

    if (!children) {
      if (isDropdownItem) {
        return <Dropdown.Item key={index}>{target}</Dropdown.Item>;
      }

      if (isStyled) {
        return <React.Fragment key={index}>{target}</React.Fragment>;
      }

      return (
        <Item key={index} {...otherItemProps} showBorder={!!otherItemProps.showBorder}>
          {target}
        </Item>
      );
    }

    return (
      <StyledDropdown key={index} target={<StyledDefaultTarget>{target}</StyledDefaultTarget>}>
        {renderHeaderItems(children, true)}
      </StyledDropdown>
    );
  });
};
