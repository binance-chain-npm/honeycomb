import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { useBuildTestId, Testable } from '../../modules/test-ids';

import { Label, Input, LabelContent } from './styled';

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> &
  Testable & {
    label?: string;
  };

export const Component = (props: Props) => {
  const { className, label, 'data-testid': testId, ...otherProps } = props;
  const buildTestId = useBuildTestId(testId);
  const id = useMemo(() => props.id || `id-${nanoid()}`, [props.id]);

  return (
    <>
      <Input {...otherProps} id={id} type="checkbox" data-testid={buildTestId('native-input')} />
      <Label htmlFor={id} className={className} data-testid={buildTestId('label')}>
        {!!label && <LabelContent data-testid={buildTestId('label-content')}>{label}</LabelContent>}
      </Label>
    </>
  );
};

Component.displayName = 'Checkbox';
