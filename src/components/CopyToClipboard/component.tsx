import React, { useCallback, useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Button } from '../Button';
import { Variant } from '../Button/styled';
import { Icon } from '../Icon';
import { Space } from '../Space';

import { Container, IconContainer, IconWrapper } from './styled';

export type Props = Pick<React.ComponentProps<typeof Button>, 'size' | 'shape'> &
  Testable & {
    className?: string;
    text?: string;
    value: string;
    variant?: Variant;
  };

export const Component = ({
  className,
  text,
  value,
  size = 'huge',
  variant = 'secondary',
  shape = 'square',
  'data-testid': testId,
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const [wasJustCopied, setWasJustCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(value);
    setWasJustCopied(true);
  }, [value]);

  const transitions = useTransition(wasJustCopied, null, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    if (!wasJustCopied) return;
    const id = setInterval(() => setWasJustCopied(false), 2000);
    return () => clearInterval(id);
  }, [wasJustCopied]);

  return (
    <Container
      className={className}
      variant={variant}
      size={size}
      shape={shape}
      disabled={wasJustCopied}
      onClick={copy}
      data-testid={buildTestId()}
    >
      <IconContainer size={size}>
        {transitions.map(({ item, key, props }) =>
          item ? (
            <IconWrapper as={animated.div} key={key} style={props}>
              <Icon.Tick data-testid={buildTestId('tick-icon')} />
            </IconWrapper>
          ) : (
            <IconWrapper as={animated.div} key={key} style={props}>
              <Icon.Copy data-testid={buildTestId('copy-icon')} />
            </IconWrapper>
          ),
        )}
      </IconContainer>
      {!!text && (
        <>
          <Space size="micro" />
          {text}
        </>
      )}
    </Container>
  );
};

Component.displayName = 'CopyToClipboard';
