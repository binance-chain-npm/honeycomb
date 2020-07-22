import React, { useState, useEffect, useMemo } from 'react';

import { Icon } from '../../Icon';
import { Label } from '../styled';
import { TextInput } from '../../TextInput';
import { ValidationMessage } from '../../internal/ValidationMessage';
import { useBuildTestId, Testable } from '../../../modules/test-ids';

export type Params = Pick<React.ComponentProps<typeof TextInput>, 'value'> &
  Testable & {
    minLenght?: number;
    mustHaveUpperCase?: boolean;
    mustHaveSymbol?: boolean;
    mustHaveDigit?: boolean;
  };

export const usePasswordInputValidation = ({
  value,
  minLenght = 8,
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

  const validationMessages: ValidationMessage[] = [
    {
      label: (
        <Label data-testid={buildTestId('error-length')}>
          {!isLongEnough ? (
            <Icon.CircledCross data-testid={buildTestId('error-length-ic-cross')} />
          ) : (
            <Icon.CircledTick data-testid={buildTestId('error-length-ic-tick')} />
          )}
          &nbsp;8 or more characters.
        </Label>
      ),
      state: !isLongEnough ? 'danger' : 'success',
    },
    {
      label: (
        <Label data-testid={buildTestId('error-upper-case')}>
          {mustHaveUpperCase && !hasUpperCase ? (
            <Icon.CircledCross data-testid={buildTestId('error-upper-case-ic-cross')} />
          ) : (
            <Icon.CircledTick data-testid={buildTestId('error-upper-case-ic-tick')} />
          )}
          &nbsp;At least one upper case character.
        </Label>
      ),
      state: mustHaveUpperCase && !hasUpperCase ? 'danger' : 'success',
    },
    {
      label: (
        <Label data-testid={buildTestId('error-digit')}>
          {mustHaveDigit && !hasDigit ? (
            <Icon.CircledCross data-testid={buildTestId('error-digit-ic-cross')} />
          ) : (
            <Icon.CircledTick data-testid={buildTestId('error-digit-ic-tick')} />
          )}
          &nbsp;At least one digit.
        </Label>
      ),
      state: mustHaveDigit && !hasDigit ? 'danger' : 'success',
    },
    {
      label: (
        <Label data-testid={buildTestId('error-symbol')}>
          {mustHaveSymbol && !hasSymbol ? (
            <Icon.CircledCross data-testid={buildTestId('error-symbol-ic-cross')} />
          ) : (
            <Icon.CircledTick data-testid={buildTestId('error-symbol-ic-tick')} />
          )}
          &nbsp;At least one symbol.
        </Label>
      ),
      state: mustHaveSymbol && !hasSymbol ? 'danger' : 'success',
    },
  ];

  return { isValid, validationMessages };
};
