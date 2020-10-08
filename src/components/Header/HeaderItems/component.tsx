import React from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { Dropdown } from '../../Dropdown';
import { HeaderItem } from '../component';
import { Item, DropdownItem } from '../styled';

import { Styled, StyledDropdown, Label } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'children'> &
  Testable & {
    items: HeaderItem[];
  };

export const Component = ({ items, 'data-testid': testId, ...otherProps }: Props) => {
  const buildTestId = useBuildTestId(testId);

  return (
    <Styled {...otherProps} data-testid={buildTestId()}>
      {items.map((it, index) => {
        const { children, target, isStyled, ...otherItemProps } = it;

        if (children) {
          return (
            <StyledDropdown
              data-testid={buildTestId('dropdown')}
              key={index}
              target={<DropdownItem>{target}</DropdownItem>}
            >
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
      })}
    </Styled>
  );
};

Component.displayName = 'HeaderItems';
