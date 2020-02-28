import React, { useState, useMemo, useEffect } from 'react';

import { Testable } from '../../modules/test-ids';
import { TextInput } from '../TextInput';
import { Tooltip } from '../Tooltip';

import { List, Item } from './styled';

const MIN_LENGTH = 8;

export type Props = Omit<React.ComponentProps<typeof TextInput>, 'type'> & Testable;

export const Component = ({ onChange, value, ...otherProps }: Props) => {
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

    setIsLongEnough(value.length >= MIN_LENGTH);
    setHasUpperCase(/[A-Z]/.test(value));
    setHasSymbol(/[^a-z0-9]/i.test(value));
    setHasDigit(/[0-9]/.test(value));
  }, [value]);

  const isValid = useMemo(() => isLongEnough && hasUpperCase && hasSymbol && hasDigit, [
    isLongEnough,
    hasUpperCase,
    hasSymbol,
    hasDigit,
  ]);

  return (
    <Tooltip
      content={
        <>
          Your password must have:
          <List>
            {!isLongEnough && <Item>8 or more characters.</Item>}
            {!hasUpperCase && <Item>At least one upper case character.</Item>}
            {!hasDigit && <Item>At least one digit.</Item>}
            {!hasSymbol && <Item>At least one symbol.</Item>}
          </List>
        </>
      }
      disabled={isValid}
    >
      <TextInput
        {...otherProps}
        value={value}
        type="password"
        state={isValid ? undefined : TextInput.State.Danger}
      />
    </Tooltip>
  );
};

Component.displayName = 'PasswordInput';

Component.Label = TextInput.Label;
Component.Input = TextInput.Input;
