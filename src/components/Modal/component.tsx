import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactModal from 'react-modal';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Box, Container, Position } from './styled';
import { Context } from './context';

const MODAL_CONTAINER_ID = 'honeycomb-modal';
const CLOSE_MODAL_TIMEOUT = 250;

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

  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => {
    onClose?.();

    if (typeof window !== 'undefined') {
      window.setTimeout(() => {
        setMounted(false);
      }, CLOSE_MODAL_TIMEOUT);
    }
  }, [onClose]);

  const context = useMemo(() => ({ loading, onClose: close, testId }), [loading, close, testId]);

  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  if (!mounted) {
    return null;
  }

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={close}
      className={className}
      parentSelector={PARENT_SELECTOR}
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
      portalClassName=""
    >
      <Context.Provider value={context}>{children}</Context.Provider>
    </ReactModal>
  );
};

Component.displayName = 'Modal';
Component.setAppElement = ReactModal.setAppElement;
