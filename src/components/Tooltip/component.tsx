import React, { useMemo } from 'react';
import Tippy from '@tippyjs/react';
import { useTheme } from 'styled-components';

import { useBuildTestId, Testable } from '../../modules/test-ids';

import { Styles, Content, Target, Radius, Shape, Size, Variant } from './styled';

export type TriggerValue = 'mouseenter' | 'click' | 'manual';

export type Props = Pick<React.HTMLProps<HTMLElement>, 'children' | 'style'> &
  Pick<
    React.ComponentProps<typeof Tippy>,
    | 'arrow'
    | 'className'
    | 'onShow'
    | 'onHide'
    | 'visible'
    | 'disabled'
    | 'hideOnClick'
    | 'interactive'
    | 'reference'
    | 'placement'
    | 'onClickOutside'
  > &
  Testable & {
    content: React.ReactNode;
    trigger?: TriggerValue | TriggerValue[];
    padding?: Size;
    radius?: Radius;
    shape?: Shape;
    variant?: Variant;
  };

export const Component = ({
  className,
  children,
  padding = 'small',
  radius = 'reduced',
  shape = 'fill',
  variant = 'normal',
  trigger: triggerProp = 'mouseenter',
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

  return (
    <>
      <Styles variant={variant} />
      <Tippy
        {...otherProps}
        trigger={trigger}
        theme={`bc-honeycomb-bare-${theme.honeycomb.id}-${variant}`}
        arrow={otherProps.arrow}
        animation="shift-away"
        placement={otherProps.placement ?? 'bottom-start'}
        zIndex={theme.honeycomb.zIndexes.tooltips}
        content={
          <Content
            padding={padding}
            radius={radius}
            variant={variant}
            data-testid={buildTestId('content')}
          >
            {otherProps.content}
          </Content>
        }
      >
        <Target className={className} shape={shape} data-testid={buildTestId('target')}>
          {children}
        </Target>
      </Tippy>
    </>
  );
};

Component.displayName = 'Tooltip';
