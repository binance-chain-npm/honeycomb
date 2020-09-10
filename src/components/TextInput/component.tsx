import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { nanoid } from 'nanoid';

import { Label } from '../internal/Label';
import {
  ValidationMessage,
  ValidationMessageContainer,
  ValidationMessageItem,
} from '../internal/ValidationMessage';
import { useBuildTestId, Testable } from '../../modules/test-ids';

import {
  Container,
  Description,
  Input,
  InputContainer,
  State,
  Left,
  Right,
  DynamicTextContainer,
  DynamicText,
} from './styled';

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
    dynamic?: boolean;
  };

export const Component = ({
  className,
  value,
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
  dynamic = false,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const id = useMemo(() => otherProps.id || `id-${nanoid()}`, [otherProps.id]);
  const [isFocused, setFocused] = useState(false);
  const [isPristine, setIsPristine] = useState(!value);
  const [scale, setScale] = useState(1);

  const spanRef = useRef<HTMLSpanElement>(null);

  const fixWidth = useCallback(() => {
    if (!value) return;

    if (Array.isArray(value) || !(value as string).length) return;

    const maxWidth = spanRef.current!.parentElement!.offsetWidth;
    const currentWidth = spanRef.current!.offsetWidth;

    if (currentWidth > 0) {
      if (currentWidth > maxWidth) {
        console.log(maxWidth / currentWidth);
        setScale(maxWidth / currentWidth);
      } else {
        setScale(1);
      }
    }
  }, [value]);

  useLayoutEffect(() => {
    if (!dynamic) return;

    fixWidth();
  }, [dynamic, fixWidth]);

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

  const input = (
    <Input
      {...otherProps}
      data-testid={buildTestId('native-input')}
      id={id}
      value={value}
      onFocus={readOnly ? undefined : focus}
      onBlur={readOnly ? undefined : blur}
      onChange={readOnly ? undefined : change}
      readOnly={readOnly}
      dynamic={dynamic}
      scale={scale}
      as={htmlTag}
    />
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
        {dynamic ? (
          <DynamicTextContainer>
            {input}
            <DynamicText ref={spanRef} scale={scale}>
              {value}
            </DynamicText>
          </DynamicTextContainer>
        ) : (
          <>{input}</>
        )}
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
