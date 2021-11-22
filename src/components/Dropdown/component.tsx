import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Tooltip } from '../Tooltip';
import { Styleless } from '../Styleless';

import { Context, ContentContext } from './context';
import { Content } from './styled';

export type TriggerValue = 'mouseenter' | 'focus' | 'click';

export type Props = Pick<React.HTMLAttributes<HTMLElement>, 'className' | 'children'> &
  Pick<React.ComponentPropsWithoutRef<typeof Tooltip>, 'appendTo' | 'bare' | 'radius'> &
  Testable & {
    target: React.ReactNode;
    open?: boolean;
    onClose?: () => void;
    onClick?: () => void;
  };

export const Component = ({
  children,
  className,
  target: targetProp,
  bare,
  radius = 'normal',
  open: openProp,
  onClose,
  onClick,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const controlled = useMemo(() => typeof openProp !== 'undefined' && !!onClose, [
    onClose,
    openProp,
  ]);

  const [open, setOpen] = useState(false);
  const { buildTestId } = useBuildTestId({ id: testId });

  const close = useCallback(
    (evt) => {
      evt.stopPropagation();
      if (!controlled) {
        setOpen(false);
      } else {
        onClose?.();
      }
    },
    [controlled, onClose],
  );

  const click = useCallback(
    (evt) => {
      evt.stopPropagation();
      if (!controlled) {
        setOpen((value) => !value);
      } else {
        onClose?.();
      }
      onClick?.();
    },
    [controlled, onClick, onClose],
  );

  useEffect(() => {
    if (!controlled) return;
    setOpen(openProp as boolean);
  }, [controlled, openProp]);

  const content = useMemo(() => {
    if (bare) {
      return children;
    }
    return <Content>{children}</Content>;
  }, [bare, children]);

  const target = useMemo(() => {
    if (!controlled || !!onClick) {
      return (
        <Styleless htmlTag="div" onClick={click}>
          {targetProp}
        </Styleless>
      );
    }
    return targetProp;
  }, [click, controlled, onClick, targetProp]);

  return (
    <Context.Provider value={{ open, onClose: close, controlled }}>
      <Tooltip
        {...otherProps}
        className={className}
        interactive={true}
        visible={open}
        content={
          <ContentContext.Provider value={{ testId: buildTestId() }}>
            {content}
          </ContentContext.Provider>
        }
        onClickOutside={(_, evt) => close(evt)}
        bare={bare}
        padding={null}
        radius={radius}
        trigger={controlled ? 'manual' : 'click'}
        data-testid={buildTestId()}
      >
        {target}
      </Tooltip>
    </Context.Provider>
  );
};

Component.displayName = 'Dropdown';
