import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { useBuildTestId, Testable } from '../../modules/test-ids';

import { Input, Sizes } from './styled';

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> &
  Testable & {
    size?: Sizes;
  };

export const Component = (props: Props) => {
  const { className, 'data-testid': testId, ...otherProps } = props;
  const { buildTestId } = useBuildTestId({ id: testId });
  const id = useMemo(() => props.id || `id-${nanoid()}`, [props.id]);

  return (
    <>
      <Input {...otherProps} id={id} type="checkbox" data-testid={buildTestId('native-input')} />
    </>
  );
};

Component.displayName = 'Switch';
