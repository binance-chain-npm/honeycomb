import React, { useState, useCallback } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Container, Element, Size } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'size'> &
  Testable & {
    children: React.ReactNode[];
    selectedIndex?: number;
    size?: Size;
  };

export const Component = ({
  children,
  onChange,
  disabled,
  selectedIndex = 0,
  'data-testid': testId,
  size = 'huge',
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);
  const [selected, setSelected] = useState(children[selectedIndex]);

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
      {children.map((option, index) => (
        <Element active={selected === option} key={index} onClick={handleClickForOption(option)}>
          {option}
        </Element>
      ))}
    </Container>
  );
};

Component.displayName = 'SegmentedControl';
