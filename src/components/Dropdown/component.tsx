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
    onClick?: () => void;
  };

export const Component = ({
  children,
  className,
  target,
  radius = 'normal',
  onClick,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const [isShowing, setIsShowing] = useState(false);
  const { buildTestId } = useBuildTestId({ id: testId });

  const click = useCallback<NonNullable<Props['onClick']>>(() => {
    setIsShowing((value) => !value);
    onClick?.();
  }, [onClick]);

  return (
    <Context.Provider value={{ isShowing, onClose: click }}>
      <Tooltip
        radius={radius}
        {...otherProps}
        className={className}
        interactive={true}
        visible={isShowing}
        content={
          <ContentContext.Provider value={{ testId: buildTestId() }}>
            <TooltipContent>{children}</TooltipContent>
          </ContentContext.Provider>
        }
        data-testid={buildTestId()}
        onClickOutside={click}
        padding="none"
      >
        <Styleless htmlTag="div" onClick={click}>
          {target}
        </Styleless>
      </Tooltip>
    </Context.Provider>
  );
};

Component.displayName = 'Dropdown';
