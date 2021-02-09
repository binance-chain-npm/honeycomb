import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { Dropdown } from '../../Dropdown';
import { HeaderChildItem } from '../component';
import { StyledDropdownItem } from '../styled';

import { Row, Icon, Address, Network, Styled } from './styled';

export type HeaderAccountChildItem = Omit<HeaderChildItem, 'label'>;

export type Props = Testable & {
  icon: React.ReactNode;
  address: React.ReactNode;
  network?: React.ReactNode;
  children?: HeaderAccountChildItem[];
};

export const Component = ({ icon, address, network, children, 'data-testid': testId }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  const hasChildren = useMemo(() => !!children && children.length > 0, [children]);
  const content = useMemo(() => {
    if (!children) return null;

    return children.map((it, index) => {
      const component: React.ReactElement[] = [];
      const { showBorder, element, ...otherProps } = it;

      component.push(
        <StyledDropdownItem key={buildTestId(`item-${index}`)} {...otherProps}>
          {element}
        </StyledDropdownItem>,
      );

      if (showBorder) {
        component.push(<Dropdown.Divider key={buildTestId(`divider-${index}`)} />);
      }

      return component;
    });
  }, [children, buildTestId]);

  return (
    <Dropdown
      target={
        <Styled arrow={false} highlightWhenOpen={hasChildren} interactive={hasChildren}>
          <Row>
            <Icon>{icon}</Icon>
            <Address>{address}</Address>
          </Row>
          {network && <Network>{network}</Network>}
        </Styled>
      }
      radius="reduced"
      data-testid={buildTestId()}
    >
      {content}
    </Dropdown>
  );
};

Component.displayName = 'Header.Account';
