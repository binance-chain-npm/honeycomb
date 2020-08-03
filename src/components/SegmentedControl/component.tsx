import React, { useState, useCallback } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Container, Element, Size } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'size'> &
  Testable & {
    options: string[];
    size?: Size;
  };

export const Component = ({
  children,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onChange,
  options,
  disabled,
  'data-testid': testId,
  size = 'huge',
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const [selected, setSelected] = useState(options[0]);

  const handleClickForOption = useCallback(
    (option) => () => {
      if (disabled) {
        return;
      }
      setSelected(option);
      onChange && onChange(option);
    },
    [disabled, setSelected, onChange],
  );

  return (
    <Container data-testid={buildTestId()} disabled={disabled} size={size} {...otherProps}>
      {options.map((option) => (
        <Element active={selected === option} key={option} onClick={handleClickForOption(option)}>
          {option}
        </Element>
      ))}
    </Container>
  );
};

Component.displayName = 'SegmentedControl';
