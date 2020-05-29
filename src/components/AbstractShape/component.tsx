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
    <svg
      data-testid={buildTestId()}
      viewBox="0 0 15 15"
      fill="red"
      style={{
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: `#${hash.substring(1, 7)}`,
      }}
    >
      <path
        d={`
          M ${values[0]},${values[1]}
          L ${values[2]},${values[3]}
          L ${values[4]},${values[5]}
          L ${values[6]},${values[7]}
          L ${values[8]},${values[9]}
          L ${values[10]},${values[11]}
          L ${values[12]},${values[13]}
          L ${values[0]},${values[1]}
        `}
        fill={`#${hash.substring(0, 6)}`}
      />
      <path
        d={`
          M ${values[14]},${values[15]}
          L ${values[16]},${values[17]}
          L ${values[18]},${values[19]}
          L ${values[20]},${values[21]}
          L ${values[22]},${values[23]}
          L ${values[24]},${values[25]}
          L ${values[26]},${values[27]}
          L ${values[14]},${values[15]}
        `}
        fill={`#${hash.substring(6, 12)}`}
      />
      <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
    </svg>
  );
};

Component.displayName = 'Button';
