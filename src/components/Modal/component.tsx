import React, { useEffect, useRef } from 'react';
import { useTransition, animated } from 'react-spring';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Container, Header, Box, Content } from './styled';
import { TestIdContext } from './context';

export type Props = Testable & {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string;
};

export const Component = ({
  open = false,
  onClose,
  children,
  'data-testid': testId,
  className,
}: Props) => {
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
    <TestIdContext.Provider value={buildTestId()}>
      {containerTransitions.map(
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
                    >
                      <Header data-testid={buildTestId('header')}>
                        <Button
                          variant="transparent"
                          size="increased"
                          shape="square"
                          onClick={onClose}
                          data-testid={buildTestId('close-btn')}
                        >
                          <Icon.Cross />
                        </Button>
                      </Header>
                      <Content data-testid={buildTestId('content')}>{children}</Content>
                    </Box>
                  ),
              )}
            </Container>
          ),
      )}
    </TestIdContext.Provider>
  );
};

Component.displayName = 'Modal';
