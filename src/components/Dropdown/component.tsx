import React, { useState, useCallback, useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Tooltip } from '../Tooltip';
import { Styleless } from '../Styleless';

import { Context, ContentContext } from './context';
import { TooltipContent } from './styled';

export type TriggerValue = 'mouseenter' | 'focus' | 'click';

export type Props = Pick<React.HTMLAttributes<HTMLElement>, 'className' | 'children'> &
  Pick<React.ComponentPropsWithoutRef<typeof Tooltip>, 'appendTo' | 'bare' | 'radius'> &
  Testable & {
    target: React.ReactNode;
    onClick?: () => void;
  };

export const Component = ({
  children,
  className,
  target,
  bare,
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

  const content = useMemo(() => {
    if (bare) {
      return children;
    }

    return <TooltipContent>{children}</TooltipContent>;
  }, [bare, children]);

  return (
    <Context.Provider value={{ isShowing, onClose: click }}>
      <Tooltip
        {...otherProps}
        className={className}
        interactive={true}
        visible={isShowing}
        content={
          <ContentContext.Provider value={{ testId: buildTestId() }}>
            {content}
          </ContentContext.Provider>
        }
        onClickOutside={click}
        bare={bare}
        padding="none"
        radius={radius}
        data-testid={buildTestId()}
      >
        <Styleless htmlTag="div" onClick={click}>
          {target}
        </Styleless>
      </Tooltip>
    </Context.Provider>
  );
};

Component.displayName = 'Dropdown';
