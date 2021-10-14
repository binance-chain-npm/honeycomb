import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { useBuildTestId, Testable } from '../../modules/test-ids';
import { Input, LabelContent, Styled } from '../Checkbox/styled';

import { Control, Label, Size } from './styled';

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'checked' | 'size' | 'type'> &
  Testable & {
    checked: boolean;
    label?: string;
    size?: Size;
  };

export const Component = ({
  className,
  checked,
  label,
  size = 'huge',
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const id = useMemo(() => otherProps.id || `id-${nanoid()}`, [otherProps.id]);

  return (
    <Styled className={className}>
      <Input
        {...otherProps}
        checked={checked}
        id={id}
        type="checkbox"
        data-testid={buildTestId('native-input')}
      />
      <Label htmlFor={id} size={size} checked={checked} data-testid={buildTestId('label')}>
        <Control size={size} checked={checked} />
        {!!label && <LabelContent data-testid={buildTestId('label-content')}>{label}</LabelContent>}
      </Label>
    </Styled>
  );
};

Component.displayName = 'Switch';
