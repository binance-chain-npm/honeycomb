import React, { useCallback } from 'react';

import { useBuildTestId } from '../../modules/test-ids';
import { ListItem } from '../ListItem';
import { SegmentedControl } from '../SegmentedControl';

import { Container, Element, Scroll } from './styled';

export type Props = React.ComponentProps<typeof SegmentedControl> &
  Pick<React.ComponentProps<typeof ListItem>, 'showBorder'>;

export const Component = ({
  children,
  onChange,
  disabled,
  selectedIndex = 0,
  'data-testid': testId,
  size = 'huge',
  shape = 'fill',
  showBorder = false,
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
        showBorder={showBorder}
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

Component.displayName = 'TabControl';
