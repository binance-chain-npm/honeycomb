import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Styleless } from '../Styleless';

import { Styled, Variant, Size } from './styled';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Testable & {
    htmlTag?: Pick<React.ComponentPropsWithoutRef<typeof Styleless>, 'htmlTag'>;
    variant: Variant;
    size?: Size;
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
    >
      {children}
    </Styled>
  );
};

Component.displayName = 'Button';
