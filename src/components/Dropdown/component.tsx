import React, { useState, useCallback } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Tooltip } from '../Tooltip';
import { Styleless } from '../Styleless';

import { TooltipContent } from './styled';
import { ShowingContext, TestIdContext } from './context';

export type TriggerValue = 'mouseenter' | 'focus' | 'click';

export type Props = Pick<React.HTMLAttributes<HTMLElement>, 'className' | 'children'> &
  Testable & {
    target: React.ReactNode;
  };

export const Component = ({ className, children, target, ...otherProps }: Props) => {
  const [isShowing, setShowing] = useState(false);
  const buildTestId = useBuildTestId(otherProps['data-testid']);

  const show = useCallback(() => setShowing(true), [setShowing]);
  const hide = useCallback(() => setShowing(false), [setShowing]);

  return (
    <Tooltip
      className={className}
      trigger="click"
      interactive={true}
      onShow={show}
      onHide={hide}
      content={
        <TestIdContext.Provider value={buildTestId('content')}>
          <TooltipContent>{children}</TooltipContent>
        </TestIdContext.Provider>
      }
      data-testid={otherProps['data-testid']}
      arrow={false}
    >
      <Styleless htmlTag="div">
        <ShowingContext.Provider value={isShowing}>{target}</ShowingContext.Provider>
      </Styleless>
    </Tooltip>
  );
};

Component.displayName = 'Dropdown';
