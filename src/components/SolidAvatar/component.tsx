import React, { useMemo } from 'react';
import { SHA1 } from 'crypto-js';
import { useTheme } from 'styled-components';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { fontNames } from '../../modules/core/fonts';

import { Svg } from './styled';

export type Props = Testable & {
  value: string;
  initial?: string;
  className?: string;
};

const COLORS = [
  '#f0b90b',
  '#d0980b',
  '#8d6207',
  '#6a4c0c',
  '#2ed191',
  '#02c076',
  '#0f8f62',
  '#1e644e',
  '#fc6e75',
  '#f84960',
  '#d9304e',
  '#982a42',
  '#82c1fc',
  '#328dfd',
  '#1773eb',
  '#1d53ab',
];

export const Component = ({ 'data-testid': testId, value, initial, className }: Props) => {
  const buildTestId = useBuildTestId(testId);
  const theme = useTheme();
  const hash = useMemo(() => SHA1(value).toString(), [value]);
  const bgColor = useMemo(() => {
    const index = Number.parseInt(hash.split('')[0], 16) % COLORS.length;
    return COLORS[index];
  }, [hash]);

  const style = useMemo(
    () => ({
      fontStyle: 'normal',
      fontSize: '14px',
      fontFamily: `${fontNames.join(',')}, -apple-system, '.SFNSText-Regular', 'San Francisco',
  BlinkMacSystemFont, '.PingFang-SC-Regular', 'Microsoft YaHei', 'Segoe UI', 'Helvetica Neue',
  Helvetica, Arial, sans-serif`,
    }),
    [],
  );

  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={buildTestId()}
    >
      <rect width="24" height="24" rx="8" fill={bgColor} />
      {!!initial && (
        <text
          x="50%"
          y="50%"
          dominant-baseline="central"
          text-anchor="middle"
          fill={theme.honeycomb.color.readable.normal(bgColor)}
          style={style}
        >
          {initial[0]}
        </text>
      )}
    </Svg>
  );
};

Component.displayName = 'SolidAvatar';
