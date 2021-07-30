import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';
import { useTheme } from 'styled-components';

import { useBuildTestId, Testable } from '../../modules/test-ids';
import { Input, LabelContent, Styled } from '../Checkbox/styled';

import { Label, Svg } from './styled';

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> &
  Testable & {
    label?: string;
  };

export const Component = ({ className, label, 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const theme = useTheme();

  const id = useMemo(() => otherProps.id || `id-${nanoid()}`, [otherProps.id]);

  return (
    <Styled className={className}>
      <Input {...otherProps} id={id} type="radio" data-testid={buildTestId('native-input')} />
      <Label htmlFor={id} data-testid={buildTestId('label')}>
        <Svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="7.5" stroke={theme.honeycomb.color.primary.normal} />
          <circle cx="8" cy="8" r="4.5" fill={theme.honeycomb.color.primary.normal} />
        </Svg>
        {!!label && <LabelContent data-testid={buildTestId('label-content')}>{label}</LabelContent>}
      </Label>
    </Styled>
  );
};

Component.displayName = 'Radio';
