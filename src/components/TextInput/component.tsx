import React, { useMemo, useCallback, useState } from 'react';
import { nanoid } from 'nanoid';

import { Label } from '../internal/Label';
import {
  ValidationMessage,
  ValidationMessageContainer,
  ValidationMessageItem,
} from '../internal/ValidationMessage';
import { useBuildTestId, Testable } from '../../modules/test-ids';

import { Container, Description, Input, InputContainer, State, Left, Right } from './styled';

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'value'> &
  Testable & {
    label?: React.ReactNode;
    description?: React.ReactNode;
    validationMessages?: ValidationMessage[];
    state?: State;
    value: NonNullable<React.InputHTMLAttributes<HTMLInputElement>['value']>;
    left?: React.ReactNode;
    right?: React.ReactNode;
    htmlTag?: 'input' | 'textarea';
    readOnly?: boolean;
  };

export const Component = ({
  className,
  label,
  description,
  validationMessages,
  'data-testid': testId,
  onFocus,
  onBlur,
  state,
  onChange,
  left,
  right,
  htmlTag = 'input',
  readOnly = false,
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
          onFocus={readOnly ? undefined : focus}
          onBlur={readOnly ? undefined : blur}
          onChange={readOnly ? undefined : change}
          readOnly={readOnly}
          as={htmlTag}
        />
        {right && <Right data-testid={buildTestId('right')}>{right}</Right>}
      </InputContainer>
      {!!description && (
        <Description data-testid={buildTestId('description')}>{description}</Description>
      )}
      {!!validationMessages && validationMessages.length > 0 && (
        <ValidationMessageContainer data-testid={buildTestId('validation-messages')}>
          {validationMessages.map(({ label, state }, index) => (
            <ValidationMessageItem as="li" key={index} state={state} isPristine={isPristine}>
              {label}
            </ValidationMessageItem>
          ))}
        </ValidationMessageContainer>
      )}
    </Container>
  );
};

Component.displayName = 'TextInput';

Component.Label = Label;
Component.Input = Input;
Component.InputContainer = InputContainer;
Component.Left = Left;
Component.Right = Right;
