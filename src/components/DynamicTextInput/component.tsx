import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';

import { Testable } from '../../modules/test-ids';

import { Container, Input, Text } from './styled';

export type Props = Testable & {
  className?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Component = ({ value, onChange, 'data-testid': testId, ...otherProps }: Props) => {
  const [scale, setScale] = useState(1);

  const spanRef = useRef<HTMLSpanElement>(null);

  const fixWidth = useCallback(() => {
    if (!value || !value.length) return;

    const maxWidth = spanRef.current!.parentElement!.offsetWidth;
    const currentWidth = spanRef.current!.offsetWidth;

    if (currentWidth > 0) {
      if (currentWidth > maxWidth) {
        setScale(maxWidth / currentWidth);
      } else {
        setScale(1);
      }
    }
  }, [value]);

  useLayoutEffect(() => {
    fixWidth();
  }, [fixWidth]);

  const change = useCallback<NonNullable<Props['onChange']>>(
    (evt) => {
      onChange?.(evt);
    },
    [onChange],
  );

  return (
    <Container>
      <Input {...otherProps} data-testid={testId} value={value} onChange={change} scale={scale} />
      <Text ref={spanRef} scale={scale}>
        {value}
      </Text>
    </Container>
  );
};

Component.displayName = 'DynamicTextInput';
