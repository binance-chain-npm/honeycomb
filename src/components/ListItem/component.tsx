import React from 'react';
import { useTheme } from 'styled-components';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { HtmlTag } from '../../modules/html-tag';
import { Icon } from '../Icon';

import { Styled, Content, Value, RightContainer, LeftContainer } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> &
  Testable & {
    htmlTag?: HtmlTag;
    left?: React.ReactNode;
    right?: React.ReactNode;
    rightValue?: React.ReactNode;
    isSelected?: boolean;
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
  rightValue,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const theme = useTheme();

  return (
    <Styled {...otherProps} as={htmlTag as any} data-testid={buildTestId()} disabled={disabled}>
      {left && <LeftContainer data-testid={buildTestId('left')}>{left}</LeftContainer>}
      <Content data-testid={buildTestId('content')}>{children}</Content>
      {right && <RightContainer data-testid={buildTestId('right')}>{right}</RightContainer>}
      {rightValue && (
        <RightContainer>
          <Value data-testid={buildTestId('value')}>{rightValue}</Value>
        </RightContainer>
      )}
      {isSelected && (
        <RightContainer>
          <Icon.Tick
            fontSize={theme.honeycomb.size.reduced}
            color={theme.honeycomb.color.primary.normal}
            data-testid={buildTestId('tick')}
          />
        </RightContainer>
      )}
      {showCaretRight && (
        <RightContainer>
          <Icon.CaretRight
            fontSize={theme.honeycomb.size.small}
            data-testid={buildTestId('caret-right')}
          />
        </RightContainer>
      )}
    </Styled>
  );
};

Component.displayName = 'ListItem';
