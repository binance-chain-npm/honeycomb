import React, { useRef } from 'react';
import { useTransition, animated } from 'react-spring';
import ReactDOM from 'react-dom';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Container, Box, Position } from './styled';
import { TestIdContext } from './context';

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
};

export const Component = ({
  open = false,
  children,
  'data-testid': testId,
  className,
  position = 'center',
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const boxRef = useRef<HTMLDivElement>(null);

  const containerTransitions = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const boxTransitions = useTransition(open, null, {
    from: { opacity: 0, transform: position === 'center' ? 'scale(0.5)' : 'translateY(100vh)' },
    enter: { opacity: 1, transform: position === 'center' ? 'scale(1)' : 'translateY(0)' },
    leave: { opacity: 0, transform: position === 'center' ? 'scale(0.5)' : 'translateY(100vh)' },
  });

  if (!MODAL_CONTAINER || !open) {
    return <>{null}</>;
  }

  return (
    <>
      {ReactDOM.createPortal(
        containerTransitions.map(
          ({ item, key, props }) =>
            item && (
              <Container
                as={animated.div}
                key={key}
                style={props}
                data-testid={buildTestId('full-viewport-container')}
                className={className}
              >
                {boxTransitions.map(
                  ({ item, key, props }) =>
                    item && (
                      <Box
                        as={animated.div}
                        key={key}
                        style={props}
                        ref={boxRef}
                        data-testid={buildTestId('box')}
                        position={position}
                      >
                        <TestIdContext.Provider value={buildTestId()}>
                          {children}
                        </TestIdContext.Provider>
                      </Box>
                    ),
                )}
              </Container>
            ),
        ),
        MODAL_CONTAINER,
      )}
    </>
  );
};

Component.displayName = 'Modal';
