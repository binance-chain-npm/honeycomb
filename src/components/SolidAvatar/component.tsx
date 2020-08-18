import React, { useMemo } from 'react';
import { SHA1 } from 'crypto-js';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { fontFamily } from '../../modules/core';
import { SOLID_AVATAR_COLORS } from '../internal/avatar-colors';
import { GoldLight } from '../../modules/themes/themes/GoldLight';

import { Svg } from './styled';

export type Props = Testable & {
  value: string;
  initial?: string;
  className?: string;
};

const style = {
  fontStyle: 'normal',
  fontSize: '14px',
  fontFamily,
};

export const Component = ({ 'data-testid': testId, value, initial, className }: Props) => {
  const buildTestId = useBuildTestId(testId);
  const hash = useMemo(() => SHA1(value).toString(), [value]);
  const bgColor = useMemo(() => {
    const index = Number.parseInt(hash.split('')[0], 16) % SOLID_AVATAR_COLORS.length;
    return SOLID_AVATAR_COLORS[index];
  }, [hash]);

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
          dominantBaseline="central"
          textAnchor="middle"
          fill={GoldLight.honeycomb.color.text.normal}
          style={style}
        >
          {initial[0]}
        </text>
      )}
    </Svg>
  );
};

Component.displayName = 'SolidAvatar';
