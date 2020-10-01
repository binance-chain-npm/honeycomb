import React, { useEffect, useRef } from 'react';
import { animated, useTransition } from 'react-spring';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Container, Box } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> &
  Testable & {
    open?: boolean;
    onClose?: () => void;
  };

export const Component = ({
  children,
  open,
  onClose,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const boxRef = useRef<HTMLDivElement>(null);

  const boxTransitions = useTransition(open, null, {
    from: { opacity: 0, transform: 'translateX(100vw)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 0, transform: 'translateX(100vw)' },
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

  if (!open) {
    return null;
  }

  return (
    <Container data-testid={buildTestId('container')}>
      <div>
        {boxTransitions.map(
          ({ item, key, props }) =>
            item && (
              <Box
                as={animated.div}
                key={key}
                style={props}
                ref={boxRef}
                data-testid={buildTestId('content')}
                {...otherProps}
              >
                {children}
              </Box>
            ),
        )}
      </div>
    </Container>
  );
};

Component.displayName = 'Drawer';
