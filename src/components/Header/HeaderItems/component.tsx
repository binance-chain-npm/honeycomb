import React, { useCallback } from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { Dropdown } from '../../Dropdown';
import { HeaderItem } from '../component';
import { Item, ItemSpace, StyledDropdownDefaultTarget, StyledDropdownItem } from '../styled';

import { Styled, Label } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'children'> &
  Testable & {
    items: HeaderItem[];
  };

export const Component = ({ items, 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  const getItem = useCallback(
    (it: HeaderItem, index) => {
      const { children, element, styled, ...otherItemProps } = it;

      if (children) {
        return (
          <Dropdown
            data-testid={buildTestId('dropdown')}
            target={
              <StyledDropdownDefaultTarget highlightWhenOpen>{element}</StyledDropdownDefaultTarget>
            }
            radius="reduced"
          >
            {children.map((child, indexChild) => {
              const component: React.ReactElement[] = [];
              const { label, showBorder, element: childTarget, ...otherChildProps } = child;

              if (label) {
                component.push(
                  <Label key={`${index}-label-${indexChild}`} interactive={false}>
                    {label}
                  </Label>,
                );
              }

              component.push(
                <StyledDropdownItem key={`${index}-item-${indexChild}`} {...otherChildProps}>
                  {childTarget}
                </StyledDropdownItem>,
              );

              if (showBorder) {
                component.push(<Dropdown.Divider key={`${index}-divider-${indexChild}`} />);
              }

              return component;
            })}
          </Dropdown>
        );
      }

      if (styled) {
        return <React.Fragment>{element}</React.Fragment>;
      }

      return (
        <Item {...otherItemProps} showBorder={false}>
          {element}
        </Item>
      );
    },
    [buildTestId],
  );

  return (
    <Styled {...otherProps} data-testid={buildTestId()}>
      {items.map((it, index) => (
        <React.Fragment key={index}>
          {getItem(it, index)}
          {index < items.length - 1 && <ItemSpace />}
        </React.Fragment>
      ))}
    </Styled>
  );
};

Component.displayName = 'HeaderItems';
