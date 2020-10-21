import React, { useMemo } from 'react';
import Tippy from '@tippyjs/react';

import { useBuildTestId, Testable } from '../../modules/test-ids';

import { Styles, ContentContainer, Size, Variant } from './styled';

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
    radius?: Size;
    variant?: Variant;
  };

export const Component = ({
  className,
  radius,
  variant = 'normal',
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);

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
        theme="bc-honeycomb-bare"
        arrow={otherProps.arrow}
        animation="shift-away"
        placement={otherProps.placement ?? 'bottom-start'}
        content={
          <ContentContainer radius={radius} variant={variant} data-testid={buildTestId('content')}>
            {otherProps.content}
          </ContentContainer>
        }
      >
        <div className={className} data-testid={buildTestId('target')}>
          {otherProps.children}
        </div>
      </Tippy>
    </>
  );
};

Component.displayName = 'Tooltip';
Component.defaultProps = {
  trigger: ['mouseenter', 'focus'],
  className: '',
} as Props;
