import React from 'react';
import { useTheme } from 'styled-components';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { HtmlTag } from '../../modules/html-tag';
import { Icon } from '../Icon';

import { Styled, ContentContainer, Content, Left, Right, Fixed } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> &
  Testable & {
    selected?: boolean;
    interactive?: boolean;
    showBorder?: boolean;
    showCaretRight?: boolean;
    left?: React.ReactNode;
    right?: React.ReactNode;
    htmlTag?: HtmlTag;
  };

export const Component = ({
  htmlTag,
  selected = false,
  interactive = true,
  showBorder = true,
  showCaretRight = false,
  children,
  disabled,
  left,
  right,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const theme = useTheme();

  return (
    <Styled
      {...otherProps}
      as={htmlTag as any}
      disabled={disabled}
      interactive={interactive}
      showBorder={showBorder}
      data-testid={buildTestId()}
    >
      {left && <Left data-testid={buildTestId('left')}>{left}</Left>}
      <ContentContainer data-testid={buildTestId('content')}>
        <Content>{children}</Content>
      </ContentContainer>
      {right && <Right data-testid={buildTestId('right')}>{right}</Right>}
      {selected && (
        <Fixed>
          <Icon.Tick
            fontSize={theme.honeycomb.size.small}
            color={theme.honeycomb.color.primary.normal}
            data-testid={buildTestId('tick')}
          />
        </Fixed>
      )}
      {showCaretRight && (
        <Fixed>
          <Icon.CaretRight
            fontSize={theme.honeycomb.size.small}
            data-testid={buildTestId('caret-right')}
          />
        </Fixed>
      )}
    </Styled>
  );
};

Component.displayName = 'ListItem';

Component.ContentContainer = ContentContainer;
Component.Content = Content;
Component.Left = Left;
Component.Right = Right;
Component.Fixed = Fixed;
