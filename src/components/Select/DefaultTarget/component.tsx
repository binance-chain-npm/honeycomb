import React from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { ListItem } from '../../ListItem';
import { Button } from '../../Button';

import { StyledButton, StyledListItem } from './styled';

export type Props = Pick<React.ComponentPropsWithoutRef<typeof Button>, 'shape'> &
  React.ComponentPropsWithoutRef<typeof ListItem> &
  Testable;

export const Component = ({
  children,
  shape,
  'data-testid': testId,
  onClick,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);

  return (
    <StyledButton variant="secondary" shape={shape} onClick={onClick}>
      <StyledListItem
        {...otherProps}
        showBorder={false}
        isInteractive={false}
        showCaretRight
        data-testid={buildTestId()}
      >
        {children}
      </StyledListItem>
    </StyledButton>
  );
};

Component.displayName = 'Select.DefaultTarget';
