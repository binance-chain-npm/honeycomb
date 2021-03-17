import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { nanoid } from 'nanoid';

import { Size } from '../internal/Size';
import { useBuildTestId, Testable } from '../../modules/test-ids';

import {
  Container,
  Description,
  Input,
  InputContainer,
  Label,
  State,
  Left,
  Right,
  End,
  DynamicTextContainer,
  DynamicText,
  ValidationMessage,
  ValidationMessageContainer,
  ValidationMessageItem,
} from './styled';

export type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'defaultValue' | 'value' | 'size'
> &
  Testable & {
    label?: React.ReactNode;
    description?: React.ReactNode;
    validationMessages?: ValidationMessage[];
    state?: State;
    value: NonNullable<React.InputHTMLAttributes<HTMLInputElement>['value']>;
    left?: React.ReactNode;
    right?: React.ReactNode;
    end?: React.ReactNode;
    htmlTag?: 'input' | 'textarea';
    readOnly?: boolean;
    size?: Size;
    dynamic?: boolean;
  };

export const Component = ({
  className,
  value,
  label,
  description,
  'data-testid': testId,
  onFocus,
  onBlur,
  state,
  onChange,
  left,
  right,
  end,
  htmlTag = 'input',
  readOnly = false,
  size = 'huge',
  dynamic = false,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
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
        setScale(maxWidth / currentWidth);
      } else {
        setScale(1);
      }
    }
  }, [value]);

  useEffect(() => {
    if (!isPristine) return;

    setIsPristine(!value);
  }, [value, isPristine]);

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
      onChange?.(evt);
    },
    [onChange],
  );

  const validationMessages = useMemo(() => {
    if (!isPristine) return otherProps.validationMessages;

    return otherProps.validationMessages?.filter((it) => it.alwaysShow);
  }, [isPristine, otherProps.validationMessages]);

  const input = useMemo(() => {
    let res = (
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
        $scale={scale}
        size={size}
        as={htmlTag as any}
      />
    );

    if (dynamic) {
      res = (
        <DynamicTextContainer>
          {res}
          <DynamicText ref={spanRef} size={size} $scale={scale}>
            {value}
          </DynamicText>
        </DynamicTextContainer>
      );
    }

    return res;
  }, [
    blur,
    buildTestId,
    change,
    dynamic,
    focus,
    htmlTag,
    id,
    otherProps,
    readOnly,
    scale,
    size,
    value,
  ]);

  const container = useMemo(() => {
    let res = (
      <InputContainer
        isFocused={isFocused}
        state={state}
        isPristine={isPristine}
        dynamic={dynamic}
        size={size}
        $scale={scale}
        hasEnd={!!end}
      >
        {left && <Left data-testid={buildTestId('left')}>{left}</Left>}
        {input}
        {right && <Right data-testid={buildTestId('right')}>{right}</Right>}
      </InputContainer>
    );

    if (end) {
      res = (
        <End>
          {res}
          {end}
        </End>
      );
    }

    return res;
  }, [buildTestId, dynamic, end, input, isFocused, isPristine, left, right, scale, size, state]);

  return (
    <Container className={className} data-testid={testId}>
      {!!label && (
        <Label htmlFor={id} data-testid={buildTestId('label')}>
          {label}
        </Label>
      )}
      {container}
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
Component.End = End;
Component.Description = Description;
Component.ValidationMessageContainer = ValidationMessageContainer;
Component.ValidationMessage = ValidationMessageItem;
