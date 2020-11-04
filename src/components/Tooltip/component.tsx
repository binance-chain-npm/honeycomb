import React, { useMemo } from 'react';
import Tippy from '@tippyjs/react';
import { useTheme } from 'styled-components';

import { useBuildTestId, Testable } from '../../modules/test-ids';

import { Styles, Content, Target, Radius, Size, Variant } from './styled';

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
    trigger: TriggerValue | TriggerValue[] | null;
    padding?: Size;
    radius?: Radius;
    variant?: Variant;
  };

export const Component = ({
  className,
  children,
  padding = 'small',
  radius = 'reduced',
  variant = 'normal',
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const theme = useTheme();

  const trigger = useMemo(() => {
    if (!otherProps.trigger) return undefined;
    if (!Array.isArray(otherProps.trigger)) return otherProps.trigger;
    return otherProps.trigger.join(' ');
  }, [otherProps.trigger]);

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
        content={
          <Content
            className={className}
            padding={padding}
            radius={radius}
            variant={variant}
            data-testid={buildTestId('content')}
          >
            {otherProps.content}
          </Content>
        }
      >
        <Target className={className} data-testid={buildTestId('target')}>
          {children}
        </Target>
      </Tippy>
    </>
  );
};

Component.displayName = 'Tooltip';
Component.defaultProps = {
  trigger: ['mouseenter', 'focus'],
  className: '',
} as Props;
