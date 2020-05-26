import React, { useCallback, useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

import { Icon } from '../Icon';

import { Container, Text, IconContainer, IconWrapper } from './styled';

export type Props = { value: string };

export const Component = (props: Props) => {
  const [wasJustCopied, setWasJustCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(props.value);
    setWasJustCopied(true);
  }, [props.value]);

  const transitions = useTransition(wasJustCopied, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    if (!wasJustCopied) return;
    const id = setInterval(() => setWasJustCopied(false), 2000);
    return () => clearInterval(id);
  }, [wasJustCopied]);

  return (
    <Container wasJustCopied={wasJustCopied} disabled={wasJustCopied} onClick={copy}>
      <Text>{props.value}</Text>
      <IconContainer>
        {transitions.map(({ item, key, props }) =>
          item ? (
            <IconWrapper as={animated.div} key={key} style={props}>
              <Icon.Tick />
            </IconWrapper>
          ) : (
            <IconWrapper as={animated.div} key={key} style={props}>
              <Icon.Copy />
            </IconWrapper>
          ),
        )}
      </IconContainer>
    </Container>
  );
};

Component.displayName = 'CopyToClipboard';
