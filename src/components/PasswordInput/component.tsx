import React, { useState, useMemo, useEffect, useCallback } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { TextInput } from '../TextInput';
import { Tooltip } from '../Tooltip';
import { Icon } from '../Icon';
import { Styleless } from '../Styleless';

import { List, Item } from './styled';

export type Props = Omit<React.ComponentProps<typeof TextInput>, 'type' | 'left' | 'right'> &
  Testable & {
    minLenght: number;
    mustHaveUpperCase: boolean;
    mustHaveSymbol: boolean;
    mustHaveDigit: boolean;
  };

export const Component = ({
  value,
  onFocus,
  onBlur,
  minLenght,
  mustHaveDigit,
  mustHaveSymbol,
  mustHaveUpperCase,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const [isLongEnough, setIsLongEnough] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [hasDigit, setHasDigit] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const focus = useCallback<NonNullable<Props['onFocus']>>(
    (evt) => {
      setIsFocused(true);
      onFocus?.(evt);
    },
    [onFocus],
  );

  const blur = useCallback<NonNullable<Props['onBlur']>>(
    (evt) => {
      setIsFocused(false);
      onBlur?.(evt);
    },
    [onBlur],
  );

  useEffect(() => {
    if (typeof value !== 'string') {
      setIsLongEnough(false);
      setHasUpperCase(false);
      setHasSymbol(false);
      setHasDigit(false);
      return;
    }

    setIsLongEnough(value.length >= minLenght);
    setHasUpperCase(/[A-Z]/.test(value));
    setHasSymbol(/[^a-z0-9]/i.test(value));
    setHasDigit(/[0-9]/.test(value));
  }, [value, minLenght]);

  const isValid = useMemo(() => {
    if (mustHaveDigit && !hasDigit) return false;
    if (mustHaveSymbol && !hasSymbol) return false;
    if (mustHaveUpperCase && !hasUpperCase) return false;
    return isLongEnough;
  }, [
    isLongEnough,
    hasUpperCase,
    hasSymbol,
    hasDigit,
    mustHaveDigit,
    mustHaveSymbol,
    mustHaveUpperCase,
  ]);

  return (
    <Tooltip
      content={
        <>
          Your password must have:
          <List>
            {!isLongEnough && (
              <Item data-testid={buildTestId('error-length')}>8 or more characters.</Item>
            )}
            {mustHaveUpperCase && !hasUpperCase && (
              <Item data-testid={buildTestId('error-upper-case')}>
                At least one upper case character.
              </Item>
            )}
            {mustHaveDigit && !hasDigit && (
              <Item data-testid={buildTestId('error-digit')}>At least one digit.</Item>
            )}
            {mustHaveSymbol && !hasSymbol && (
              <Item data-testid={buildTestId('error-symbol')}>At least one symbol.</Item>
            )}
          </List>
        </>
      }
      enabled={!isValid}
      trigger="manual"
      visible={isFocused}
      hideOnClick={false}
    >
      <TextInput
        {...otherProps}
        data-testid={testId}
        onFocus={focus}
        onBlur={blur}
        value={value}
        type={shouldDisplay ? 'text' : 'password'}
        state={isValid ? undefined : TextInput.State.Danger}
        right={
          <Styleless
            data-testid={buildTestId('toggle-show')}
            tag="button"
            onClick={() => setShouldDisplay(!shouldDisplay)}
            style={{ fontSize: 24 }}
          >
            <Icon src={shouldDisplay ? Icon.Src.EyeBlocked : Icon.Src.Eye} />
          </Styleless>
        }
      />
    </Tooltip>
  );
};

Component.displayName = 'PasswordInput';
Component.defaultProps = {
  minLenght: 8,
  mustHaveUpperCase: true,
  mustHaveSymbol: true,
  mustHaveDigit: true,
};

Component.Label = TextInput.Label;
Component.Input = TextInput.Input;
