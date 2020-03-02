import React, { useMemo, useCallback, useState } from 'react';
import nanoid from 'nanoid';

import { Label } from '../internal/Label';
import { useBuildTestId, Testable } from '../../modules/test-ids';

import { Container } from './Container';
import { Input } from './Input';
import { Left } from './Left';
import { Right } from './Right';
import { InputContainer, State } from './InputContainer';

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'value'> &
  Testable & {
    label?: React.ReactNode;
    state?: State;
    value: NonNullable<React.InputHTMLAttributes<HTMLInputElement>['value']>;
    left?: React.ReactNode;
    right?: React.ReactNode;
  };

export const Component = (props: Props) => {
  const { className, label, 'data-testid': testId, onFocus, onBlur, ...otherProps } = props;
  const buildTestId = useBuildTestId(testId);
  const id = useMemo(() => props.id || `id-${nanoid()}`, [props.id]);
  const [isFocused, setFocused] = useState(false);

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

  return (
    <Container className={className} data-testid={testId}>
      {!!label && (
        <Label htmlFor={id} data-testid={buildTestId('label')}>
          {label}
        </Label>
      )}
      <InputContainer isFocused={isFocused}>
        {props.left && <Left data-testid={buildTestId('left')}>{props.left}</Left>}
        <Input
          {...otherProps}
          data-testid={buildTestId('native-input')}
          id={id}
          onFocus={focus}
          onBlur={blur}
        />
        {props.right && <Right data-testid={buildTestId('right')}>{props.right}</Right>}
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
