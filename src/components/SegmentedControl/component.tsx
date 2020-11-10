import React, { useCallback } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Size } from '../internal/Size';

import { Container, Element, Scroll, Shape, Variant } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'size' | 'onChange'> &
  Testable & {
    children: React.ReactNodeArray;
    selectedIndex?: number;
    size?: Size;
    shape?: Shape;
    variant?: Variant;
    onChange?: (params: { selectedIndex: number }) => void;
  };

export const Component = ({
  children,
  className,
  onChange,
  disabled,
  selectedIndex = 0,
  'data-testid': testId,
  size = 'huge',
  shape = 'fill',
  variant = 'segmented',
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  const handleClickForOption = useCallback(
    (params: { selectedIndex: number }) => () => {
      if (disabled) return;
      onChange?.(params);
    },
    [disabled, onChange],
  );

  return (
    <Scroll className={className}>
      <Container
        data-testid={buildTestId()}
        disabled={disabled}
        size={size}
        shape={shape}
        variant={variant}
        {...otherProps}
      >
        {children.map((option, index) => {
          const selected = children[selectedIndex] === option;
          return (
            <Element
              active={selected}
              key={index}
              onClick={handleClickForOption({ selectedIndex: index })}
              data-testid={buildTestId(`${index}`)}
              data-testisselected={selected}
              size={size}
              variant={variant}
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

Component.Container = Container;
Component.Control = Element;
