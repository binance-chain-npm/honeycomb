import React, { useMemo } from 'react';
import nanoid from 'nanoid';

import { Label } from '../internal/Label';
import { useBuildTestId, Testable } from '../../modules/test-ids';

import { Container } from './Container';
import { Input } from './Input';

export type Props = React.HTMLAttributes<HTMLInputElement> &
  Testable & {
    label?: React.ReactNode;
  };

export const Component = (props: Props) => {
  const { className, label, 'data-testid': testId, ...otherProps } = props;
  const buildTestId = useBuildTestId(testId);
  const id = useMemo(() => props.id || `id-${nanoid()}`, [props.id]);
  return (
    <Container className={className} data-testid={testId}>
      {!!label && (
        <Label htmlFor={id} data-testid={buildTestId('label')}>
          {label}
        </Label>
      )}
      <Input {...otherProps} data-testid={buildTestId('native-input')} id={id} />
    </Container>
  );
};

Component.displayName = 'TextInput';

Component.Label = Label;
Component.Input = Input;
