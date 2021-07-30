import React, { useCallback, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import { useBuildTestId, Testable } from '../../modules/test-ids';
import { Input, LabelContent, Styled } from '../Checkbox/styled';

import { Control, Label, Size } from './styled';

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> &
  Testable & {
    label?: string;
    size?: Size;
  };

export const Component = ({
  className,
  label,
  size = 'huge',
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const id = useMemo(() => otherProps.id || `id-${nanoid()}`, [otherProps.id]);

  const [checked, setChecked] = useState(false);

  const check = useCallback<NonNullable<Props['onChange']>>(
    (evt) => {
      setChecked((value) => !value);
      otherProps.onChange?.(evt);
    },
    [otherProps.onChange],
  );

  return (
    <Styled className={className}>
      <Input
        {...otherProps}
        id={id}
        type="checkbox"
        onChange={check}
        data-testid={buildTestId('native-input')}
      />
      <Label htmlFor={id} size={size} data-testid={buildTestId('label')}>
        <Control size={size} checked={checked} />
        {!!label && <LabelContent data-testid={buildTestId('label-content')}>{label}</LabelContent>}
      </Label>
    </Styled>
  );
};

Component.displayName = 'Switch';
