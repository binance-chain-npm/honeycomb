import React, { useState, useCallback } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Tooltip } from '../Tooltip';
import { Styleless } from '../Styleless';

import { Context, ContentContext } from './context';
import { TooltipContent } from './styled';

export type TriggerValue = 'mouseenter' | 'focus' | 'click';

export type Props = Pick<React.HTMLAttributes<HTMLElement>, 'className' | 'children'> &
  Pick<React.ComponentPropsWithoutRef<typeof Tooltip>, 'radius'> &
  Testable & {
    target: React.ReactNode;
  };

export const Component = ({ children, className, target, ...otherProps }: Props) => {
  const [isShowing, setIsShowing] = useState(false);
  const buildTestId = useBuildTestId(otherProps['data-testid']);

  const toggle = useCallback(() => {
    setIsShowing((value) => !value);
  }, []);

  return (
    <Context.Provider value={{ isShowing, onClose: toggle }}>
      <Tooltip
        {...otherProps}
        className={className}
        interactive={true}
        visible={isShowing}
        trigger={null}
        content={
          <ContentContext.Provider value={{ testId: buildTestId('content') }}>
            <TooltipContent>{children}</TooltipContent>
          </ContentContext.Provider>
        }
        data-testid={otherProps['data-testid']}
        arrow={false}
        onClickOutside={toggle}
      >
        <Styleless htmlTag="div" onClick={toggle}>
          {target}
        </Styleless>
      </Tooltip>
    </Context.Provider>
  );
};

Component.displayName = 'Dropdown';
