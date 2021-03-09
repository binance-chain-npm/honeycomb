import React, { useCallback, useMemo } from 'react';
import { useTransition, animated } from 'react-spring';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { StyledReactModal, Box, Container, Position } from './styled';
import { Context } from './context';

const CLOSE_MODAL_TIMEOUT = 250;

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
  typeof document !== 'undefined'
    ? document.querySelector<HTMLElement>(`#${MODAL_CONTAINER_ID}`) || undefined
    : undefined;

const PARENT_SELECTOR = !!MODAL_CONTAINER ? () => MODAL_CONTAINER : undefined;

export type Props = Testable & {
  open?: boolean;
  children?: React.ReactNode;
  className?: string;
  loading?: boolean;
  position?: Position;
  closeOnEsc?: boolean;
  closeOnBackgroundClick?: boolean;
  onClose?: () => void;
};

export const Component = ({
  open = false,
  children,
  className,
  loading,
  position = 'center',
  closeOnEsc = true,
  closeOnBackgroundClick = false,
  onClose,
  'data-testid': testId,
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

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

  const close = useCallback(
    (evt: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => {
      evt.stopPropagation();
      onClose?.();
    },
    [onClose],
  );

  return (
    <>
      <StyledReactModal
        isOpen={open}
        onRequestClose={close}
        className={className}
        parentSelector={PARENT_SELECTOR}
        appElement={MODAL_CONTAINER}
        closeTimeoutMS={CLOSE_MODAL_TIMEOUT}
        shouldCloseOnEsc={closeOnEsc}
        shouldCloseOnOverlayClick={closeOnBackgroundClick}
        overlayElement={(props, contentElement) => (
          <>
            {containerTransitions.map(({ item, props: transitionProps, key }) =>
              item ? (
                <Container {...props} as={animated.div} key={key} style={transitionProps}>
                  {contentElement}
                </Container>
              ) : null,
            )}
          </>
        )}
      >
        {boxTransitions.map(({ item, props: transitionProps, key }) =>
          item ? (
            <Box
              as={animated.div}
              key={key}
              style={transitionProps}
              position={position}
              data-testid={buildTestId()}
            >
              <Context.Provider value={context}>{children}</Context.Provider>
            </Box>
          ) : null,
        )}
      </StyledReactModal>
    </>
  );
};

Component.displayName = 'Modal';
