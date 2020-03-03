import React, { useState, useCallback } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { TextInput } from '../TextInput';
import { Tooltip } from '../Tooltip';
import { Icon } from '../Icon';
import { Styleless } from '../Styleless';

export type Props = Omit<React.ComponentProps<typeof TextInput>, 'type' | 'left' | 'right'> &
  Testable & {
    isValid: boolean;
    tooltipContent: React.ReactNode;
  };

export const Component = ({
  value,
  onFocus,
  onBlur,
  isValid,
  tooltipContent,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
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

  return (
    <Tooltip
      content={tooltipContent}
      enabled={!!tooltipContent && !isValid}
      theme="bare"
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

Component.Label = TextInput.Label;
Component.Input = TextInput.Input;
