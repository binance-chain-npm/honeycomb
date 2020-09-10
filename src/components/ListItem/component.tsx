import React from 'react';
import { useTheme } from 'styled-components';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { HtmlTag } from '../../modules/html-tag';
import { Icon } from '../Icon';

import { Styled, ContentContainer, Content, Left, Right } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> &
  Testable & {
    isSelected?: boolean;
    isInteractive?: boolean;
    showBorder?: boolean;
    showCaretRight?: boolean;
    left?: React.ReactNode;
    right?: React.ReactNode;
    htmlTag?: HtmlTag;
  };

export const Component = ({
  htmlTag,
  isSelected = false,
  isInteractive = true,
  showBorder = true,
  showCaretRight = false,
  children,
  disabled,
  left,
  right,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const theme = useTheme();

  return (
    <Styled
      {...otherProps}
      as={htmlTag as any}
      disabled={disabled}
      isInteractive={isInteractive}
      showBorder={showBorder}
      data-testid={buildTestId()}
    >
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
