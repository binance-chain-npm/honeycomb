import React, { useCallback } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Size } from '../internal/Size';

import { Container, Element, Scroll, Shape } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'size' | 'onChange'> &
  Testable & {
    children: React.ReactNodeArray;
    selectedIndex?: number;
    size?: Size;
    shape?: Shape;
    onChange?: (params: { selectedIndex: number }) => void;
  };

export const Component = ({
  children,
  onChange,
  disabled,
  selectedIndex = 0,
  'data-testid': testId,
  size = 'huge',
  shape = 'fill',
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);

  const handleClickForOption = useCallback(
    (params: { selectedIndex: number }) => () => {
      if (disabled) return;
      onChange?.(params);
    },
    [disabled, onChange],
  );

  return (
    <Scroll>
      <Container
        data-testid={buildTestId()}
        disabled={disabled}
        size={size}
        shape={shape}
        {...otherProps}
      >
        {children.map((option, index) => {
          const isSelected = children[selectedIndex] === option;
          return (
            <Element
              active={isSelected}
              key={index}
              onClick={handleClickForOption({ selectedIndex: index })}
              data-testid={buildTestId(`${index}`)}
              data-testisselected={isSelected}
              size={size}
            >
              {option}
            </Element>
          );
        })}
      </Container>
    </Scroll>
  );
};

Component.displayName = 'SegmentedControl';
