import React, { useCallback, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import { useBuildTestId, Testable } from '../../modules/test-ids';
import { Input, LabelContent } from '../Checkbox/styled';

import { Styled, Label, Check } from './styled';

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> &
  Testable & {
    label?: string;
  };

export const Component = ({
  className,
  label,
  onChange,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const id = useMemo(() => otherProps.id || `id-${nanoid()}`, [otherProps.id]);

  const [checked, setChecked] = useState(!!otherProps.checked);

  const check = useCallback<NonNullable<Props['onChange']>>(
    (evt) => {
      setChecked((value) => !value);
      onChange?.(evt);
    },
    [onChange],
  );

  return (
    <Styled>
      <Input
        {...otherProps}
        id={id}
        type="radio"
        onChange={check}
        data-testid={buildTestId('native-input')}
      />
      <Label htmlFor={id} className={className} data-testid={buildTestId('label')}>
        {!!label && <LabelContent data-testid={buildTestId('label-content')}>{label}</LabelContent>}
      </Label>
      <Check visible={checked} />
    </Styled>
  );
};

Component.displayName = 'Radio';
