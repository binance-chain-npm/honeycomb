import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { Dropdown } from '../../Dropdown';
import { HeaderChildItem } from '../component';
import { StyledDropdownItem } from '../styled';

import { Row, StyledLoading, Icon, Address, Network, Styled } from './styled';

export type HeaderAccountChildItem = Omit<HeaderChildItem, 'label'>;

export type Props = Testable & {
  icon: React.ReactNode;
  children?: HeaderAccountChildItem[];
  pre: React.ReactNode;
  post: {
    address: React.ReactNode;
    network?: React.ReactNode;
  };
  pending: React.ReactNode;
  state: 'pre' | 'post' | 'pending';
};

export const Component = ({
  icon,
  children,
  pre,
  post,
  pending,
  state,
  'data-testid': testId,
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  const hasChildren = useMemo(() => !!children && children.length > 0, [children]);

  const items = useMemo(() => {
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

  const target = useMemo(() => {
    const content = (() => {
      switch (state) {
        case 'pre':
          return pre;
        case 'post':
          return (
            <>
              <Row>
                <Icon>{icon}</Icon>
                <Address>{post.address}</Address>
              </Row>
              {post.network && <Network>{post.network}</Network>}
            </>
          );
        case 'pending':
          return (
            <Row>
              <Icon>{icon}</Icon>
              {pending}
              <StyledLoading />
            </Row>
          );
      }
    })();

    return (
      <Styled arrow={false} highlightWhenOpen={hasChildren} interactive={hasChildren}>
        {content}
      </Styled>
    );
  }, [icon, pre, post, pending, state, hasChildren]);

  if (!children) {
    return target;
  }

  return (
    <Dropdown target={target} radius="reduced" data-testid={buildTestId()}>
      {items}
    </Dropdown>
  );
};

Component.displayName = 'Header.Account';
