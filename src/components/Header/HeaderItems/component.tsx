import React from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { Dropdown } from '../../Dropdown';
import { HeaderItem } from '../component';
import { Item, DropdownItem } from '../styled';

import { Styled, Label } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'children'> &
  Testable & {
    items: HeaderItem[];
  };

export const Component = ({ items, 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  return (
    <Styled {...otherProps} data-testid={buildTestId()}>
      {items.map((it, index) => {
        const { children, element, styled, ...otherItemProps } = it;

        if (children) {
          return (
            <Dropdown
              data-testid={buildTestId('dropdown')}
              key={index}
              target={<DropdownItem>{element}</DropdownItem>}
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
                  <Dropdown.Item key={`${index}-item-${indexChild}`} {...otherChildProps}>
                    {childTarget}
                  </Dropdown.Item>,
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
          return <React.Fragment key={index}>{element}</React.Fragment>;
        }

        return (
          <Item key={index} {...otherItemProps} showBorder={!!otherItemProps.showBorder}>
            {element}
          </Item>
        );
      })}
    </Styled>
  );
};

Component.displayName = 'HeaderItems';
