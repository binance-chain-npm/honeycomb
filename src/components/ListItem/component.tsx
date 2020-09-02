import React from 'react';
import { useTheme } from 'styled-components';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { HtmlTag } from '../../modules/html-tag';
import { Icon } from '../Icon';

import { Styled, ContentContainer, Content, Left, Right } from './styled';

export type ListItemBaseProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> & {
  htmlTag?: HtmlTag;
  isSelected?: boolean;
};

export type Props = ListItemBaseProps &
  Testable & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    showCaretRight?: boolean;
  };

export const Component = ({
  children,
  disabled,
  htmlTag,
  left,
  right,
  showCaretRight = false,
  isSelected = false,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const theme = useTheme();

  return (
    <Styled {...otherProps} as={htmlTag as any} data-testid={buildTestId()} disabled={disabled}>
      {left && <Left data-testid={buildTestId('left')}>{left}</Left>}
      <ContentContainer data-testid={buildTestId('content')}>
        <Content>{children}</Content>
      </ContentContainer>
      {right && <Right data-testid={buildTestId('right')}>{right}</Right>}
      {isSelected && (
        <Right>
          <Icon.Tick
            fontSize={theme.honeycomb.size.reduced}
            color={theme.honeycomb.color.primary.normal}
            data-testid={buildTestId('tick')}
          />
        </Right>
      )}
      {showCaretRight && (
        <Right>
          <Icon.CaretRight
            fontSize={theme.honeycomb.size.small}
            data-testid={buildTestId('caret-right')}
          />
        </Right>
      )}
    </Styled>
  );
};

Component.displayName = 'ListItem';

Component.ContentContainer = ContentContainer;
Component.Content = Content;
Component.Left = Left;
Component.Right = Right;
