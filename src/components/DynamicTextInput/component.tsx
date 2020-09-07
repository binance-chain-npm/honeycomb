import React, { useCallback } from 'react';

import { Testable } from '../../modules/test-ids';
import { TextInput } from '../TextInput';
import { Button } from '../Button';

import { Container, Input } from './styled';

export type Props = Omit<
  React.ComponentProps<typeof TextInput>,
  'type' | 'left' | 'right' | 'value'
> &
  Testable & {
    value?: string;
  };

export const Component = ({ value, 'data-testid': testId, onChange, ...otherProps }: Props) => {
  // const buildTestId = useBuildTestId(testId);

  const change = useCallback<NonNullable<Props['onChange']>>(
    (evt) => {
      onChange?.(evt);
    },
    [onChange],
  );

  return (
    <>
      <Container>
        <Input
          data-testid={testId}
          value={value}
          type="text"
          length={value?.length || 1}
          onChange={change}
          {...otherProps}
        />
      </Container>
      <TextInput value="Hello" />
      <Button variant="primary">Hello</Button>
    </>
  );
};

Component.displayName = 'DynamicTextInput';
