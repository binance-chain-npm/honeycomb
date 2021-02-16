import React, { useEffect, useMemo, useRef } from 'react';
import { useTransition, animated } from 'react-spring';
import ReactDOM from 'react-dom';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Container, Box, Position } from './styled';
import { Context } from './context';

const MODAL_CONTAINER_ID = 'honeycomb-modal';

(() => {
  if (typeof document === 'undefined') {
    return;
  }

  const queryResult = document.querySelector(`#${MODAL_CONTAINER_ID}`);
  if (queryResult) return;

  const div = document.createElement('div');
  div.setAttribute('id', MODAL_CONTAINER_ID);

  document.querySelector('body')?.appendChild(div);
})();

const MODAL_CONTAINER =
  typeof document !== 'undefined' ? document.querySelector(`#${MODAL_CONTAINER_ID}`) : null;

export type Props = Testable & {
  open?: boolean;
  children?: React.ReactNode;
  className?: string;
  position?: Position;
  loading?: boolean;
  closeOnEscapeKeyDown?: boolean;
  onClose?: () => void;
};

export const Component = ({
  open = false,
  children,
  'data-testid': testId,
  className,
  position = 'center',
  loading,
  closeOnEscapeKeyDown = false,
  onClose,
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const boxRef = useRef<HTMLDivElement>(null);

  const context = useMemo(() => ({ loading, onClose, testId }), [loading, onClose, testId]);

  const containerTransitions = useTransition(open, null, {
    initial: open ? { opacity: 1 } : { opacity: 0 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const boxOpen = { opacity: 1, transform: position === 'center' ? 'scale(1)' : 'translateY(0)' };
  const boxClosed = {
    opacity: 0,
    transform: position === 'center' ? 'scale(0.5)' : 'translateY(100vh)',
  };

  const boxTransitions = useTransition(open, null, {
    initial: open ? boxOpen : boxClosed,
    from: boxClosed,
    enter: boxOpen,
    leave: boxClosed,
  });

  useEffect(() => {
    if (!closeOnEscapeKeyDown || !open) return;

    const listener = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') onClose?.();
    };

    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, [closeOnEscapeKeyDown, open, onClose]);

  if (!MODAL_CONTAINER) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        containerTransitions.map(({ item, key, props }) =>
          item ? (
            <Container
              as={animated.div}
              key={key}
              style={props}
              data-testid={buildTestId('full-viewport-container')}
            >
              {boxTransitions.map(({ item, key, props }) =>
                item ? (
                  <Box
                    as={animated.div}
                    key={key}
                    style={props}
                    ref={boxRef}
                    data-testid={buildTestId('box')}
                    position={position}
                    className={className}
                  >
                    <Context.Provider value={context}>{children}</Context.Provider>
                  </Box>
                ) : null,
              )}
            </Container>
          ) : null,
        ),
        MODAL_CONTAINER,
      )}
    </>
  );
};

Component.displayName = 'Modal';
