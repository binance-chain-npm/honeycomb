import React, { useState, useEffect, useMemo } from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Icon } from '../../Icon';
import { Space } from '../../Space';
import { TextInput, ValidationMessage } from '../../TextInput';
import { Label } from '../styled';

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
          {icons && (
            <>
              {!isLongEnough ? (
                <Icon.CrossCircle data-testid={buildTestId('error-length-ic-cross')} />
              ) : (
                <Icon.TickCircle data-testid={buildTestId('error-length-ic-tick')} />
              )}
              <Space size="micro" />
            </>
          )}
          8 or more characters.
        </Label>
      ),
      state: !isLongEnough ? 'danger' : 'success',
      alwaysShow: true,
    },
    {
      label: (
        <Label data-testid={buildTestId('error-upper-case')}>
          {icons && (
            <>
              {mustHaveUpperCase && !hasUpperCase ? (
                <Icon.CrossCircle data-testid={buildTestId('error-upper-case-ic-cross')} />
              ) : (
                <Icon.TickCircle data-testid={buildTestId('error-upper-case-ic-tick')} />
              )}
              <Space size="micro" />
            </>
          )}
          At least one upper case character.
        </Label>
      ),
      state: mustHaveUpperCase && !hasUpperCase ? 'danger' : 'success',
      alwaysShow: true,
    },
    {
      label: (
        <Label data-testid={buildTestId('error-digit')}>
          {icons && (
            <>
              {mustHaveDigit && !hasDigit ? (
                <Icon.CrossCircle data-testid={buildTestId('error-digit-ic-cross')} />
              ) : (
                <Icon.TickCircle data-testid={buildTestId('error-digit-ic-tick')} />
              )}
              <Space size="micro" />
            </>
          )}
          At least one digit.
        </Label>
      ),
      state: mustHaveDigit && !hasDigit ? 'danger' : 'success',
      alwaysShow: true,
    },
    {
      label: (
        <Label data-testid={buildTestId('error-symbol')}>
          {icons && (
            <>
              {mustHaveSymbol && !hasSymbol ? (
                <Icon.CrossCircle data-testid={buildTestId('error-symbol-ic-cross')} />
              ) : (
                <Icon.TickCircle data-testid={buildTestId('error-symbol-ic-tick')} />
              )}
              <Space size="micro" />
            </>
          )}
          At least one symbol.
        </Label>
      ),
      state: mustHaveSymbol && !hasSymbol ? 'danger' : 'success',
      alwaysShow: true,
    },
  ];

  return { isValid, validationMessages };
};
