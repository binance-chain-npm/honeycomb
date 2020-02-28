import React, { useMemo } from 'react';
import Tippy from '@tippy.js/react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

import { useBuildTestId, Testable } from '../../modules/test-ids';

export type TriggerValue = 'mouseenter' | 'focus' | 'click';

export type Props = Pick<React.HTMLProps<HTMLElement>, 'children'> &
  Pick<
    React.ComponentProps<typeof Tippy>,
    'arrow' | 'className' | 'theme' | 'onShow' | 'onHide' | 'visible'
  > &
  Testable & {
    content: React.ReactNode;
    trigger: TriggerValue | TriggerValue[];
    target: React.ReactNode;
    disabled?: boolean;
  };

export const Component = (props: Props) => {
  const buildTestId = useBuildTestId(props['data-testid']);
  const trigger = useMemo(() => {
    if (!Array.isArray(props.trigger)) return props.trigger;
    return props.trigger.join(' ');
  }, [props.trigger]);

  return (
    <Tippy
      {...props}
      className={props.className}
      trigger={trigger}
      theme={props.theme || 'tooltip'}
      arrow={props.arrow}
      animation="shift-away"
      hideOnClick={false}
      placement="bottom-start"
      enabled={!props.disabled}
      content={<div data-testid={buildTestId('content')}>{props.content}</div>}
    >
      <div data-testid={buildTestId('target')}>{props.children}</div>
    </Tippy>
  );
};

Component.displayName = 'Tooltip';
Component.defaultProps = {
  trigger: ['mouseenter', 'focus'],
} as Props;
