import React from 'react';

import { Dropdown } from '../../Dropdown';
import { HeaderItem } from '../component';
import { Item } from '../styled';

import { StyledDropdown, StyledDefaultTarget, Label } from './styled';

export const renderHeaderItems = (items: HeaderItem[]) => {
  return items.map((it, index) => {
    const { children, target, isStyled, ...otherItemProps } = it;

    if (children) {
      return (
        <StyledDropdown key={index} target={<StyledDefaultTarget>{target}</StyledDefaultTarget>}>
          {children.map((child, indexChild) => {
            const component: React.ReactElement[] = [];
            const { label, showBorder, target: childTarget, ...otherChildProps } = child;

            if (label) {
              component.push(
                <Label key={`${index}-label-${indexChild}`} isInteractive={false}>
                  {label}
                </Label>,
              );
            }

            component.push(
              <Dropdown.Item key={`${index}-item-${indexChild}`} {...otherChildProps}>
                {childTarget}
              </Dropdown.Item>,
            );

            if (showBorder) {
              component.push(<Dropdown.Divider key={`${index}-divider-${indexChild}`} />);
            }

            return component;
          })}
        </StyledDropdown>
      );
    }

    if (isStyled) {
      return <React.Fragment key={index}>{target}</React.Fragment>;
    }

    return (
      <Item key={index} {...otherItemProps} showBorder={!!otherItemProps.showBorder}>
        {target}
      </Item>
    );
  });
};
