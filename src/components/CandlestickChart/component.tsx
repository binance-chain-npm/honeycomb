import React from 'react';

export type Props = { width: number; height: number };

export const Component = ({ width, height }: Props) => {
  return <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}></svg>;
};

Component.displayName = 'CandlestickChart';
