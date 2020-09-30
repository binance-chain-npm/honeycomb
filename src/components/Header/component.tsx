import React from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Dropdown } from '../Dropdown';
import { ListItem } from '../ListItem';

import {
  Styled,
  StyledDefaultTarget,
  StyledListItem,
  LeftContainer,
  Logo,
  Left,
  Right,
} from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'children'> &
  Testable & {
    logo?: React.ReactNode;
    left?: HeaderItem[];
    right?: HeaderItem[];
  };

type HeaderItem = Omit<
  React.ComponentPropsWithoutRef<typeof ListItem>,
  'showCaretRight' | 'children' | 'target'
> & {
  target: React.ReactElement | string;
  children?: HeaderItem[];
};

export const Component = ({ logo, left, right, 'data-testid': testId, ...otherProps }: Props) => {
  const buildTestId = useBuildTestId(testId);

  const renderHeaderItems = (items: HeaderItem[], isDropdownItem = false) => {
    return items.map((it, index) => {
      const { children, target, ...otherItemProps } = it;

      if (!children) {
        return isDropdownItem || typeof target !== 'string' ? (
          <React.Fragment key={index}>{target}</React.Fragment>
        ) : (
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

  return (
    <Styled {...otherProps} data-testid={buildTestId()}>
      <LeftContainer>
        {logo && <Logo data-testid={buildTestId('logo')}>{logo}</Logo>}
        {left && left.length > 0 && (
          <Left data-testid={buildTestId('left')}>{renderHeaderItems(left)}</Left>
        )}
      </LeftContainer>
      {right && right.length > 0 && (
        <Right data-testid={buildTestId('right')}>{renderHeaderItems(right)}</Right>
      )}
    </Styled>
  );
};

Component.displayName = 'Header';

Component.Left = Left;
Component.Right = Right;
