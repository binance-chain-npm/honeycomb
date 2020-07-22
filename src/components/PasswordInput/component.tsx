import React, { useState, useCallback } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { TextInput } from '../TextInput';
import { Icon } from '../Icon';
import { ValidationMessage } from '../internal/ValidationMessage';
import { Styleless } from '../Styleless';

export type Props = Omit<React.ComponentProps<typeof TextInput>, 'type' | 'left' | 'right'> &
  Testable & {
    isValid: boolean;
    validationMessages?: ValidationMessage[];
  };

export const Component = ({
  value,
  onFocus,
  onBlur,
  isValid,
  validationMessages,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const focus = useCallback<NonNullable<Props['onFocus']>>(
    (evt) => {
      onFocus?.(evt);
    },
    [onFocus],
  );

  const blur = useCallback<NonNullable<Props['onBlur']>>(
    (evt) => {
      onBlur?.(evt);
    },
    [onBlur],
  );

  return (
    <TextInput
      {...otherProps}
      data-testid={testId}
      onFocus={focus}
      onBlur={blur}
      value={value}
      type={shouldDisplay ? 'text' : 'password'}
      state={isValid ? undefined : 'danger'}
      right={
        <Styleless
          data-testid={buildTestId('toggle-show')}
          as="button"
          onClick={() => setShouldDisplay(!shouldDisplay)}
          style={{ fontSize: 24 }}
        >
          {shouldDisplay ? <Icon.EyeBlocked /> : <Icon.Eye />}
        </Styleless>
      }
      validationMessages={validationMessages}
    />
  );
};

Component.displayName = 'PasswordInput';

Component.Label = TextInput.Label;
Component.Input = TextInput.Input;
