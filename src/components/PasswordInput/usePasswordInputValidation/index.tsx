import React, { useState, useEffect, useMemo } from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { TextInput, ValidationMessage } from '../../TextInput';
import { Label, Tick, Cross } from '../styled';

export type Params = Pick<React.ComponentProps<typeof TextInput>, 'value'> &
  Testable & {
    icons?: boolean;
    minLength?: number;
    mustHaveUpperCase?: boolean;
    mustHaveSymbol?: boolean;
    mustHaveDigit?: boolean;
  };

export const usePasswordInputValidation = ({
  value,
  icons = false,
  minLength = 8,
  mustHaveDigit = true,
  mustHaveSymbol = true,
  mustHaveUpperCase = true,
  'data-testid': testId,
}: Params) => {
  const { buildTestId } = useBuildTestId({ id: testId });
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
          {icons &&
            (!isLongEnough ? (
              <Cross data-testid={buildTestId('error-length-ic-cross')} />
            ) : (
              <Tick data-testid={buildTestId('error-length-ic-tick')} />
            ))}
          8 or more characters.
        </Label>
      ),
      state: !isLongEnough ? 'danger' : 'success',
      alwaysShow: true,
    },
    {
      label: (
        <Label data-testid={buildTestId('error-upper-case')}>
          {icons &&
            (mustHaveUpperCase && !hasUpperCase ? (
              <Cross data-testid={buildTestId('error-upper-case-ic-cross')} />
            ) : (
              <Tick data-testid={buildTestId('error-upper-case-ic-tick')} />
            ))}
          At least one upper case character.
        </Label>
      ),
      state: mustHaveUpperCase && !hasUpperCase ? 'danger' : 'success',
      alwaysShow: true,
    },
    {
      label: (
        <Label data-testid={buildTestId('error-digit')}>
          {icons &&
            (mustHaveDigit && !hasDigit ? (
              <Cross data-testid={buildTestId('error-digit-ic-cross')} />
            ) : (
              <Tick data-testid={buildTestId('error-digit-ic-tick')} />
            ))}
          At least one digit.
        </Label>
      ),
      state: mustHaveDigit && !hasDigit ? 'danger' : 'success',
      alwaysShow: true,
    },
    {
      label: (
        <Label data-testid={buildTestId('error-symbol')}>
          {icons &&
            (mustHaveSymbol && !hasSymbol ? (
              <Cross data-testid={buildTestId('error-symbol-ic-cross')} />
            ) : (
              <Tick data-testid={buildTestId('error-symbol-ic-tick')} />
            ))}
          At least one symbol.
        </Label>
      ),
      state: mustHaveSymbol && !hasSymbol ? 'danger' : 'success',
      alwaysShow: true,
    },
  ];

  return { isValid, validationMessages };
};
