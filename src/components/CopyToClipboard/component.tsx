import React, { useCallback, useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

import { Icon } from '../Icon';
import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Container, Text, IconContainer, IconWrapper } from './styled';

export type Props = Testable & { className?: string; value: string };

export const Component = ({ value, 'data-testid': testId, className }: Props) => {
  const buildTestId = useBuildTestId(testId);
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
      wasJustCopied={wasJustCopied}
      disabled={wasJustCopied}
      onClick={copy}
      data-testid={buildTestId()}
    >
      <Text data-testid={buildTestId('text')}>{value}</Text>
      <IconContainer>
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
    </Container>
  );
};

Component.displayName = 'CopyToClipboard';
