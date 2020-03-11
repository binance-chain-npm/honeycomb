import React, { useMemo } from 'react';
import { animated } from 'react-spring';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { useHoverSpring } from '../../modules/hovering';
import { Styleless } from '../../components/Styleless';

import { Styled, Look, Wrapper } from './styled';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Testable & {
    as?: React.ComponentProps<typeof Styleless>['as'];
    look: Look;
  };

export const Component = ({
  children,
  onMouseEnter,
  onMouseLeave,
  href,
  as: asProp,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const { style, mouseEnter, mouseLeave } = useHoverSpring({
    onMouseEnter,
    onMouseLeave,
  });

  const as = useMemo(() => {
    if (!!asProp) return asProp;
    if (!!href) return 'a';
    return 'button';
  }, [asProp, href]);

  return (
    <Styled
      {...otherProps}
      as={as}
      href={href}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      data-testid={buildTestId()}
    >
      <Wrapper as={animated.div} style={style} data-testid={buildTestId('wrapper')}>
        {children}
      </Wrapper>
    </Styled>
  );
};

Component.displayName = 'Button';
Component.defaultProps = {
  look: Look.Default,
} as Props;
