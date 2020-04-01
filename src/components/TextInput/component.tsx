import React, { useMemo, useCallback, useState } from 'react';
import { nanoid } from 'nanoid';

import { Label } from '../internal/Label';
import { useBuildTestId, Testable } from '../../modules/test-ids';

import { Container, Input, Left, Right, InputContainer, State } from './styled';

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'value'> &
  Testable & {
    label?: React.ReactNode;
    state?: State;
    value: NonNullable<React.InputHTMLAttributes<HTMLInputElement>['value']>;
    left?: React.ReactNode;
    right?: React.ReactNode;
  };

export const Component = ({
  className,
  label,
  'data-testid': testId,
  onFocus,
  onBlur,
  state,
  onChange,
  left,
  right,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const id = useMemo(() => otherProps.id || `id-${nanoid()}`, [otherProps.id]);
  const [isFocused, setFocused] = useState(false);
  const [isPristine, setIsPristine] = useState(!otherProps.value);

  const focus = useCallback<NonNullable<Props['onFocus']>>(
    (evt) => {
      setFocused(true);
      onFocus?.(evt);
    },
    [onFocus],
  );

  const blur = useCallback<NonNullable<Props['onBlur']>>(
    (evt) => {
      setFocused(false);
      onBlur?.(evt);
    },
    [onBlur],
  );

  const change = useCallback<NonNullable<Props['onChange']>>(
    (evt) => {
      setIsPristine(false);
      onChange?.(evt);
    },
    [onChange],
  );

  return (
    <Container className={className} data-testid={testId}>
      {!!label && (
        <Label htmlFor={id} data-testid={buildTestId('label')}>
          {label}
        </Label>
      )}
      <InputContainer isFocused={isFocused} state={state} isPristine={isPristine}>
        {left && <Left data-testid={buildTestId('left')}>{left}</Left>}
        <Input
          {...otherProps}
          data-testid={buildTestId('native-input')}
          id={id}
          onFocus={focus}
          onBlur={blur}
          onChange={change}
        />
        {right && <Right data-testid={buildTestId('right')}>{right}</Right>}
      </InputContainer>
    </Container>
  );
};

Component.displayName = 'TextInput';

Component.Label = Label;
Component.Input = Input;
Component.State = State;
Component.Left = Left;
Component.Right = Right;
