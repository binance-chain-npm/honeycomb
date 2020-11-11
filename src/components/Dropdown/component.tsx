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
    onToggle?: () => void;
  };

export const Component = ({
  children,
  className,
  target,
  radius = 'normal',
  onToggle,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const [isShowing, setIsShowing] = useState(false);
  const buildTestId = useBuildTestId(testId);

  const toggle = useCallback(() => {
    setIsShowing((value) => !value);
    onToggle?.();
  }, [onToggle]);

  return (
    <Context.Provider value={{ isShowing, onClose: toggle }}>
      <Tooltip
        radius={radius}
        {...otherProps}
        className={className}
        interactive={true}
        visible={isShowing}
        content={
          <ContentContext.Provider value={{ testId: buildTestId('content') }}>
            <TooltipContent>{children}</TooltipContent>
          </ContentContext.Provider>
        }
        data-testid={buildTestId()}
        onClickOutside={toggle}
        padding="none"
      >
        <Styleless htmlTag="div" onClick={toggle}>
          {target}
        </Styleless>
      </Tooltip>
    </Context.Provider>
  );
};

Component.displayName = 'Dropdown';
