import React, { useState, useEffect, useMemo } from 'react';

import { Icon } from '../../Icon';
import { TextInput } from '../../TextInput';
import { List, Item } from '../styled';
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

  const validationMessage = (
    <List>
      {!isLongEnough && (
        <Item data-testid={buildTestId('error-length')}>
          <Icon.CircledTick data-testid={buildTestId('circled-tick-error-length')} />
          &nbsp;8 or more characters.
        </Item>
      )}
      {mustHaveUpperCase && !hasUpperCase && (
        <Item data-testid={buildTestId('error-upper-case')}>
          <Icon.CircledTick data-testid={buildTestId('circled-tick-error-upper-case')} />
          &nbsp;At least one upper case character.
        </Item>
      )}
      {mustHaveDigit && !hasDigit && (
        <Item data-testid={buildTestId('error-digit')}>
          <Icon.CircledTick data-testid={buildTestId('circled-tick-error-digit')} />
          &nbsp;At least one digit.
        </Item>
      )}
      {mustHaveSymbol && !hasSymbol && (
        <Item data-testid={buildTestId('error-symbol')}>
          <Icon.CircledTick data-testid={buildTestId('circled-tick-error-symbol')} />
          &nbsp;At least one symbol.
        </Item>
      )}
    </List>
  );

  return { isValid, validationMessage };
};
