import React, { useMemo } from 'react';
import Tippy from '@tippyjs/react';

import { useBuildTestId, Testable } from '../../modules/test-ids';

import { Styles } from './styled';

export type TriggerValue = 'mouseenter' | 'click' | 'manual';

export type Props = Pick<React.HTMLProps<HTMLElement>, 'children'> &
  Pick<
    React.ComponentProps<typeof Tippy>,
    | 'arrow'
    | 'className'
    | 'theme'
    | 'onShow'
    | 'onHide'
    | 'visible'
    | 'disabled'
    | 'hideOnClick'
    | 'interactive'
    | 'reference'
  > &
  Testable & {
    content: React.ReactNode;
    trigger: TriggerValue | TriggerValue[];
    target: React.ReactNode;
  };

export const Component = ({ 'data-testid': testId, ...otherProps }: Props) => {
  const buildTestId = useBuildTestId(testId);
  const trigger = useMemo(() => {
    if (!Array.isArray(otherProps.trigger)) return otherProps.trigger;
    return otherProps.trigger.join(' ');
  }, [otherProps.trigger]);

  return (
    <>
      <Styles />
      <Tippy
        {...otherProps}
        className={otherProps.className}
        trigger={trigger}
        theme={otherProps.theme || 'tooltip'}
        arrow={otherProps.arrow}
        animation="shift-away"
        placement="bottom-start"
        content={<div data-testid={buildTestId('content')}>{otherProps.content}</div>}
      >
        <div data-testid={buildTestId('target')}>{otherProps.children}</div>
      </Tippy>
    </>
  );
};

Component.displayName = 'Tooltip';
Component.defaultProps = {
  trigger: ['mouseenter', 'focus'],
  className: '',
} as Props;
