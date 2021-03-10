import React, { useCallback, useMemo } from 'react';
import ReactModal from 'react-modal';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Box, CLOSE_MODAL_TIMEOUT, Container, Position, Styles } from './styled';
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

  const close = useCallback(
    (evt: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => {
      evt.stopPropagation();
      onClose?.();
    },
    [onClose],
  );

  return (
    <>
      <Styles position={position} />
      <ReactModal
        isOpen={open}
        onRequestClose={close}
        className={className}
        parentSelector={PARENT_SELECTOR}
        appElement={MODAL_CONTAINER}
        closeTimeoutMS={CLOSE_MODAL_TIMEOUT}
        shouldCloseOnEsc={closeOnEsc}
        shouldCloseOnOverlayClick={closeOnBackgroundClick}
        contentElement={(props, contentElement) => (
          <Box {...props} style={{}} position={position} data-testid={buildTestId()}>
            {contentElement}
          </Box>
        )}
        overlayElement={(props, contentElement) => (
          <Container {...props} style={{}}>
            {contentElement}
          </Container>
        )}
      >
        <Context.Provider value={context}>{children}</Context.Provider>
      </ReactModal>
    </>
  );
};

Component.displayName = 'Modal';
