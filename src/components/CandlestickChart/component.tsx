import React, { useRef } from 'react';
import useComponentSize from '@rehooks/component-size';

import { FixedSizeCandlestickChart } from './FixedSizeCandlestickChart';

export type Props = Omit<
  React.ComponentPropsWithoutRef<typeof FixedSizeCandlestickChart>,
  'width' | 'height'
>;

export const Component = (props: Props) => {
  const ref = useRef(null);
  const { width, height } = useComponentSize(ref);
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div ref={ref} style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <FixedSizeCandlestickChart {...props} width={width} height={height} />
      </div>
    </div>
  );
};

Component.displayName = 'CandlestickChart';
