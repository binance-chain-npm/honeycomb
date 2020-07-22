import React, { useMemo, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { HtmlTag } from '../../modules/html-tag';

import { Styled, Variant, Size, Shape, Shadow } from './styled';

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

  const [touching, setTouching] = useState(false);

  const { x } = useSpring({
    from: { x: 0 },
    x: touching ? 1 : 0,
  });

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
      onClick={() => setTouching((value) => !value)}
    >
      {children}
      <Shadow
        as={animated.div}
        style={{
          opacity: x.interpolate({ range: [0, 0.5, 1], output: [0, 0.3, 0] }),
          boxShadow: x
            .interpolate({
              range: [0, 0.3, 0.4, 0.5, 0.4, 0.7, 1],
              output: [0, 10, 8, 12, 8, 10, 0],
            })
            .interpolate((x) => `0 0 0 ${x}px currentColor`),
        }}
      />
    </Styled>
  );
};

Component.displayName = 'Button';
