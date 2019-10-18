import React, { useState } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Tooltip } from '../Tooltip';

import { Styles } from './styles';
import { ShowingContext, TestIdContext } from './context';

export type TriggerValue = 'mouseenter' | 'focus' | 'click';

export type Props = Pick<React.HTMLAttributes<HTMLElement>, 'className' | 'children'> &
  Testable & {
    target: React.ReactNode;
  };

export const Component = (props: Props) => {
  const [isShowing, setShowing] = useState(false);
  const buildTestId = useBuildTestId(props['data-testid']);
  return (
    <>
      <Styles />
      <Tooltip
        className={props.className}
        trigger="click"
        theme="dropdown"
        onShow={() => setShowing(true)}
        onHide={() => setShowing(false)}
        content={
          <TestIdContext.Provider value={buildTestId('content')}>
            {props.children}
          </TestIdContext.Provider>
        }
        data-testid={props['data-testid']}
        arrow={false}
      >
        <ShowingContext.Provider value={isShowing}>{props.target}</ShowingContext.Provider>
      </Tooltip>
    </>
  );
};

Component.displayName = 'Dropdown';
