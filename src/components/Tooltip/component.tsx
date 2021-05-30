import React, { useMemo } from 'react';
import Tippy from '@tippyjs/react';
import { useTheme } from 'styled-components';

import { useBuildTestId, Testable } from '../../modules/test-ids';

import { Content, Target, Radius, Shape, Size, Variant } from './styled';

export type TriggerValue = 'mouseenter' | 'click' | 'manual';

export type Props = Pick<React.HTMLProps<HTMLElement>, 'children' | 'style'> &
  Pick<
    React.ComponentProps<typeof Tippy>,
    | 'appendTo'
    | 'arrow'
    | 'className'
    | 'disabled'
    | 'hideOnClick'
    | 'interactive'
    | 'maxWidth'
    | 'onClickOutside'
    | 'onHide'
    | 'onShow'
    | 'placement'
    | 'reference'
    | 'visible'
  > &
  Testable & {
    content: React.ReactNode;
    trigger?: TriggerValue | TriggerValue[];
    padding?: Size;
    radius?: Radius;
    shape?: Shape;
    variant?: Variant;
    bare?: boolean;
  };

export const Component = ({
  className,
  children,
  content: contentProp,
  padding = 'small',
  radius = 'reduced',
  shape = 'fill',
  variant = 'normal',
  trigger: triggerProp = 'mouseenter',
  bare = false,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const theme = useTheme();

  const trigger = useMemo(() => {
    if (!triggerProp || otherProps.visible !== undefined) return undefined;
    if (!Array.isArray(triggerProp)) return triggerProp;
    return triggerProp.join(' ');
  }, [triggerProp, otherProps.visible]);

  const content = useMemo(() => {
    if (bare) {
      return <div data-testid={buildTestId('content')}>{contentProp}</div>;
    }

    return (
      <Content
        padding={padding}
        $radius={radius}
        variant={variant}
        data-testid={buildTestId('content')}
      >
        {contentProp}
      </Content>
    );
  }, [contentProp, bare, padding, radius, variant, buildTestId]);

  return (
    <Tippy
      {...otherProps}
      className={className || ''} // Tippy throws error if className is undefined.
      trigger={trigger}
      theme={`bc-honeycomb-bare-${theme.honeycomb.id}-${variant}`}
      arrow={otherProps.arrow}
      animation="shift-away"
      placement={otherProps.placement ?? 'bottom-start'}
      zIndex={theme.honeycomb.zIndexes.tooltips}
      content={content}
    >
      <Target $shape={shape} data-testid={buildTestId('target')}>
        {children}
      </Target>
    </Tippy>
  );
};

Component.displayName = 'Tooltip';
