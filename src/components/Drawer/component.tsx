import React, { useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';

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
  const { buildTestId } = useBuildTestId({ id: testId });
  const boxRef = useRef<HTMLDivElement>(null);

  const style = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? `translateX(0)` : `translateX(100%)`,
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
    <Container as={animated.div} style={style} data-testid={buildTestId('container')}>
      <Box ref={boxRef} data-testid={buildTestId('content')} {...otherProps}>
        {children}
      </Box>
    </Container>
  );
};

Component.displayName = 'Drawer';
