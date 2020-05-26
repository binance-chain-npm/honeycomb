import React, { useState, useCallback } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Tooltip } from '../Tooltip';
import { Button } from '../Button';

import { Styles } from './styled';
import { ShowingContext, TestIdContext } from './context';

export type TriggerValue = 'mouseenter' | 'focus' | 'click';

export type Props = Pick<React.HTMLAttributes<HTMLElement>, 'className' | 'children'> &
  Testable & {
    target: React.ReactNode;
  };

export const Component = (props: Props) => {
  const [isShowing, setShowing] = useState(false);
  const buildTestId = useBuildTestId(props['data-testid']);

  const show = useCallback(() => setShowing(true), [setShowing]);
  const hide = useCallback(() => setShowing(false), [setShowing]);

  return (
    <>
      <Styles />
      <Tooltip
        className={props.className}
        trigger="click"
        theme="dropdown"
        onShow={show}
        onHide={hide}
        content={
          <TestIdContext.Provider value={buildTestId('content')}>
            {props.children}
          </TestIdContext.Provider>
        }
        data-testid={props['data-testid']}
        arrow={false}
      >
        <Button htmlTag="div" variant="styleless" size="fit">
          <ShowingContext.Provider value={isShowing}>{props.target}</ShowingContext.Provider>
        </Button>
      </Tooltip>
    </>
  );
};

Component.displayName = 'Dropdown';
