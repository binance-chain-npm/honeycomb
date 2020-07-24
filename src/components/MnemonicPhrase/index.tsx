import React, { useMemo } from 'react';

import { Container, Item } from './styled';

export type Props = { value: string[] | string };

export const MnemonicPhrase = ({ value }: Props) => {
  const realValue = useMemo(() => {
    if (Array.isArray(value)) return value;
    return value.split(' ');
  }, [value]);

  return (
    <Container as="div">
      {realValue.map((word, index) => (
        <Item as="div" key={index}>
          {word}
        </Item>
      ))}
    </Container>
  );
};
