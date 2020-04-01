import React, { useMemo } from 'react';

import { Container, Item } from './styled';

export type Props = { value: string[] | string };

export const MnemonicPhrase = ({ value }: Props) => {
  const realValue = useMemo(() => {
    if (Array.isArray(value)) return value;
    return value.split(' ');
  }, [value]);

  return (
    <Container as="ol">
      {realValue.map((word, index) => (
        <Item as="li" key={index}>
          {word}
        </Item>
      ))}
    </Container>
  );
};