import React, { useMemo } from 'react';
import { SHA1 } from 'crypto-js';

import { Testable, useBuildTestId } from '../../modules/test-ids';

export type Props = Testable & {
  value: string;
};

export const Component = ({ 'data-testid': testId, value }: Props) => {
  const buildTestId = useBuildTestId(testId);

  const hash = useMemo(() => SHA1(value).toString(), [value]);
  const values = useMemo(() => hash.split('').map((it) => Number.parseInt(it, 16)), [hash]);

  return (
    <div style={{ position: 'relative', width: '1em', height: '1em', fontSize: 200 }}>
      <svg
        data-testid={buildTestId()}
        viewBox="0 0 15 15"
        fill="red"
        style={{
          width: '1em',
          height: '1em',
          borderRadius: '50%',
          pointerEvents: 'none',
          userSelect: 'none',
          background: `#${hash.substring(1, 7)}`,
        }}
      >
        <g
          transform={`rotate(${(values[3] / 16) * 360} ${(values[0] + values[2]) / 2} ${(values[1] +
            values[2]) /
            2})`}
        >
          <rect
            x={values[0]}
            y={values[1]}
            width={values[2]}
            height={values[2]}
            fill={`#${hash.substring(0, 6)}`}
          />
        </g>
        <g
          transform={`rotate(${(values[7] / 16) * 360} ${(values[4] + values[6]) / 2} ${(values[5] +
            values[6]) /
            2})`}
        >
          <rect
            x={values[4]}
            y={values[5]}
            width={values[6]}
            height={values[6]}
            fill={`#${hash.substring(6, 12)}`}
          />
        </g>
        <g
          transform={`rotate(${(values[11] / 16) * 360} ${(values[8] + values[10]) /
            2} ${(values[9] + values[10]) / 2})`}
        >
          <rect
            x={values[8]}
            y={values[9]}
            width={values[10]}
            height={values[10]}
            fill={`#${hash.substring(12, 18)}`}
          />
        </g>
      </svg>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          top: 0,
          left: 0,
          fontSize: '0.75em',
          pointerEvents: 'none',
          userSelect: 'none',
          WebkitTextStroke: '1px black',
        }}
      >
        账
      </div>
    </div>
  );
};

Component.displayName = 'Button';
