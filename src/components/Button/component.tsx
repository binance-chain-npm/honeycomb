import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { HtmlTag } from '../../modules/html-tag';

import { Styled, Variant, Size, Shape } from './styled';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Testable & {
    htmlTag?: HtmlTag;
    variant: Variant;
    size?: Size;
    shape?: Shape;
  };

export const Component = ({
  children,
  onMouseEnter,
  onMouseLeave,
  href,
  disabled,
  htmlTag,
  'data-testid': testId,
  variant,
  size = 'huge',
  shape = 'fill',
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);

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
      variant={variant}
      size={size}
      shape={shape}
    >
      {children}
    </Styled>
  );
};

Component.displayName = 'Button';
