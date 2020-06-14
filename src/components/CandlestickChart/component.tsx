import React, { useRef } from 'react';
import useComponentSize from '@rehooks/component-size';

import { FixedSizeCandlestickChart } from './FixedSizeCandlestickChart';
import { Container, Wrapper } from './styled';

export type Props = Omit<
  React.ComponentPropsWithoutRef<typeof FixedSizeCandlestickChart>,
  'width' | 'height'
>;

export const Component = (props: Props) => {
  const sizeRef = useRef(null);
  const { width, height } = useComponentSize(sizeRef);

  return (
    <Container ref={sizeRef}>
      <Wrapper>
        <FixedSizeCandlestickChart {...props} width={width} height={height} />
      </Wrapper>
    </Container>
  );
};

Component.displayName = 'CandlestickChart';
