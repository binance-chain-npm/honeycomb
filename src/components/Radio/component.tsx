import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { useBuildTestId, Testable } from '../../modules/test-ids';
import { Input, LabelContent } from '../Checkbox/styled';

import { Styled, Label } from './styled';

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> &
  Testable & {
    label?: string;
  };

export const Component = ({ className, label, 'data-testid': testId, ...otherProps }: Props) => {
  const buildTestId = useBuildTestId(testId);
  const id = useMemo(() => otherProps.id || `id-${nanoid()}`, [otherProps.id]);

  return (
    <Styled>
      <Input {...otherProps} id={id} type="radio" data-testid={buildTestId('native-input')} />
      <Label htmlFor={id} className={className} data-testid={buildTestId('label')}>
        {!!label && <LabelContent data-testid={buildTestId('label-content')}>{label}</LabelContent>}
      </Label>
    </Styled>
  );
};

Component.displayName = 'Radio';
