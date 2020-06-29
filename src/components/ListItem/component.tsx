import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { HtmlTag } from '../../modules/html-tag';
import { Icon } from '../Icon';

import { Styled, Content, Value, RightContainer, LeftContainer } from './styled';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
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
  onMouseEnter,
  onMouseLeave,
  href,
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

  const asProp = useMemo(() => {
    if (!!htmlTag) return htmlTag;
    if (!!href) return 'a';
    return 'button';
  }, [htmlTag, href]);

  return (
    <Styled
      {...otherProps}
      as={asProp as any}
      href={disabled ? undefined : href}
      data-testid={buildTestId()}
      disabled={disabled}
    >
      {left && <LeftContainer>{left}</LeftContainer>}
      <Content>{children}</Content>
      {right && <RightContainer>{right}</RightContainer>}
      {rightValue && (
        <RightContainer>
          <Value>{rightValue}</Value>
        </RightContainer>
      )}
      {isSelected && (
        <RightContainer>
          <Icon.Tick
            fontSize={theme.honeycomb.size.reduced}
            color={theme.honeycomb.color.primary.normal}
          />
        </RightContainer>
      )}
      {showCaretRight && (
        <RightContainer>
          <Icon.CaretRight fontSize={theme.honeycomb.size.small} />
        </RightContainer>
      )}
    </Styled>
  );
};

Component.displayName = 'ListItem';
