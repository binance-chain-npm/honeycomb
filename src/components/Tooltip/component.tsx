import React, { useEffect, useMemo, useRef } from 'react';
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
    onClickContent?: () => void;
  };

export const Component = ({ 'data-testid': testId, ...otherProps }: Props) => {
  const buildTestId = useBuildTestId(testId);
  const trigger = useMemo(() => {
    if (!Array.isArray(otherProps.trigger)) return otherProps.trigger;
    return otherProps.trigger.join(' ');
  }, [otherProps.trigger]);
  const tooltipContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!otherProps.onClickContent || !otherProps.visible) return;

    const listener = (evt: MouseEvent) => {
      const tooltipContent = tooltipContentRef.current;

      if (!tooltipContent) return;
      if (tooltipContent.contains(evt.target as Node)) return;

      otherProps.onClickContent?.();
    };

    window.addEventListener('click', listener);
    return () => window.removeEventListener('click', listener);
  }, [otherProps.onClickContent, otherProps.visible]);

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
        content={
          <div data-testid={buildTestId('content')} ref={tooltipContentRef}>
            {otherProps.content}
          </div>
        }
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
