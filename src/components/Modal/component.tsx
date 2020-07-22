import React, { useEffect, useRef } from 'react';
import { useTransition, animated } from 'react-spring';
import ReactDOM from 'react-dom';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Loading } from '../Loading';
import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Container, Header, Box, Title, Scroll, Content, Position, LoadingState } from './styled';

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
  onClose?: () => void;
  children?: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  position?: Position;
};

export const Component = ({
  open = false,
  onClose,
  children,
  title,
  isLoading,
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

  useEffect(() => {
    if (!open) return;

    const listener = (evt: MouseEvent) => {
      const boxElement = boxRef.current;
      if (!boxElement) return;
      if (boxElement.contains(evt.target as Node)) return;
      onClose?.();
    };

    window.addEventListener('click', listener);
    return () => window.removeEventListener('click', listener);
  }, [open, onClose]);

  if (!MODAL_CONTAINER) {
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
                        <Header data-testid={buildTestId('header')} hasHeader={!!title}>
                          <Title>
                            {!!title && isLoading && (
                              <LoadingState>
                                <Loading />
                              </LoadingState>
                            )}
                            {title}
                          </Title>
                          <Button
                            variant="secondary"
                            size="increased"
                            shape="square"
                            onClick={onClose}
                            data-testid={buildTestId('close-btn')}
                          >
                            <Icon.Cross />
                          </Button>
                        </Header>
                        <Scroll data-testid={buildTestId('scroll-container')}>
                          <Content data-testid={buildTestId('content')}>{children}</Content>
                        </Scroll>
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
