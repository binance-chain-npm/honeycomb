import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Styled, Look, Wrapper } from './styled';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Testable & {
    as?: React.ComponentProps<typeof Styled>['as'];
    look?: Look;
  };

export const Component = ({
  children,
  onMouseEnter,
  onMouseLeave,
  href,
  disabled,
  as: asProp,
  'data-testid': testId,
  look = Look.Default,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);

  const as = useMemo(() => {
    if (!!asProp) return asProp;
    if (!!href) return 'a';
    return 'button';
  }, [asProp, href]);

  return (
    <Styled
      {...otherProps}
      as={as}
      href={disabled ? undefined : href}
      data-testid={buildTestId()}
      disabled={disabled}
      look={look}
    >
      <Wrapper data-testid={buildTestId('wrapper')}>{children}</Wrapper>
    </Styled>
  );
};

Component.displayName = 'Button';
