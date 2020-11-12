import React, { useState, useEffect, useMemo } from 'react';

import { Icon } from '../../Icon';
import { TextInput, ValidationMessage } from '../../TextInput';
import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Label } from '../styled';

export type Params = Pick<React.ComponentProps<typeof TextInput>, 'value'> &
  Testable & {
    minLength?: number;
    mustHaveUpperCase?: boolean;
    mustHaveSymbol?: boolean;
    mustHaveDigit?: boolean;
  };

export const usePasswordInputValidation = ({
  value,
  minLength = 8,
  mustHaveDigit = true,
  mustHaveSymbol = true,
  mustHaveUpperCase = true,
  'data-testid': testId,
}: Params) => {
  const buildTestId = useBuildTestId(testId);
  const [isLongEnough, setIsLongEnough] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [hasDigit, setHasDigit] = useState(false);

  useEffect(() => {
    if (typeof value !== 'string') {
      setIsLongEnough(false);
      setHasUpperCase(false);
      setHasSymbol(false);
      setHasDigit(false);
      return;
    }

    setIsLongEnough(value.length >= minLength);
    setHasUpperCase(/[A-Z]/.test(value));
    setHasSymbol(/[^a-z0-9]/i.test(value));
    setHasDigit(/[0-9]/.test(value));
  }, [value, minLength]);

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

  const validationMessages: ValidationMessage[] = [
    {
      label: (
        <Label data-testid={buildTestId('error-length')}>
          {!isLongEnough ? (
            <Icon.CrossCircle data-testid={buildTestId('error-length-ic-cross')} />
          ) : (
            <Icon.TickCircle data-testid={buildTestId('error-length-ic-tick')} />
          )}
          &nbsp;8 or more characters.
        </Label>
      ),
      state: !isLongEnough ? 'danger' : 'success',
      alwaysShow: true,
    },
    {
      label: (
        <Label data-testid={buildTestId('error-upper-case')}>
          {mustHaveUpperCase && !hasUpperCase ? (
            <Icon.CrossCircle data-testid={buildTestId('error-upper-case-ic-cross')} />
          ) : (
            <Icon.TickCircle data-testid={buildTestId('error-upper-case-ic-tick')} />
          )}
          &nbsp;At least one upper case character.
        </Label>
      ),
      state: mustHaveUpperCase && !hasUpperCase ? 'danger' : 'success',
      alwaysShow: true,
    },
    {
      label: (
        <Label data-testid={buildTestId('error-digit')}>
          {mustHaveDigit && !hasDigit ? (
            <Icon.CrossCircle data-testid={buildTestId('error-digit-ic-cross')} />
          ) : (
            <Icon.TickCircle data-testid={buildTestId('error-digit-ic-tick')} />
          )}
          &nbsp;At least one digit.
        </Label>
      ),
      state: mustHaveDigit && !hasDigit ? 'danger' : 'success',
      alwaysShow: true,
    },
    {
      label: (
        <Label data-testid={buildTestId('error-symbol')}>
          {mustHaveSymbol && !hasSymbol ? (
            <Icon.CrossCircle data-testid={buildTestId('error-symbol-ic-cross')} />
          ) : (
            <Icon.TickCircle data-testid={buildTestId('error-symbol-ic-tick')} />
          )}
          &nbsp;At least one symbol.
        </Label>
      ),
      state: mustHaveSymbol && !hasSymbol ? 'danger' : 'success',
      alwaysShow: true,
    },
  ];

  return { isValid, validationMessages };
};
