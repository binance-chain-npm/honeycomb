import React, { useEffect, useRef } from 'react';
import { useTransition, animated } from 'react-spring';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Container, Header, Box, Body, Scroll } from './styled';

export type Props = Testable & { open?: boolean; onClose?: () => void; children?: React.ReactNode };

export const Component = ({ open = false, onClose, children, 'data-testid': testId }: Props) => {
  const buildTestId = useBuildTestId(testId);
  const boxRef = useRef<HTMLDivElement>(null);

  const containerTransitions = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const boxTransitions = useTransition(open, null, {
    from: { opacity: 0, transform: 'scale(0.5)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.5)' },
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

  return (
    <>
      {containerTransitions.map(
        ({ item, key, props }) =>
          item && (
            <Container
              as={animated.div}
              key={key}
              style={props}
              data-testid={buildTestId('full-viewport-container')}
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
                    >
                      <Header data-testid={buildTestId('header')}>
                        <Button
                          variant="transparent"
                          shape="square"
                          onClick={onClose}
                          data-testid={buildTestId('close-btn')}
                        >
                          <Icon.Cross />
                        </Button>
                      </Header>
                      <Scroll data-testid={buildTestId('scroll-container')}>
                        <Body data-testid={buildTestId('body')}>{children}</Body>
                      </Scroll>
                    </Box>
                  ),
              )}
            </Container>
          ),
      )}
    </>
  );
};

Component.displayName = 'Modal';
