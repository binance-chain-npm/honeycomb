import React from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { DefaultTarget } from '../../internal/DefaultTarget';
import { ListItem } from '../../ListItem';

import { StyledListItem } from './styled';

export type Props = React.ComponentPropsWithoutRef<typeof ListItem> & Testable;

export const Component = ({
  children,
  shape,
  onClick,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);

  return (
    <DefaultTarget onClick={onClick} data-testid={buildTestId()}>
      <StyledListItem showCaretRight showBorder={false} isInteractive={false} {...otherProps}>
        {children}
      </StyledListItem>
    </DefaultTarget>
  );
};

Component.displayName = 'Select.DefaultTarget';
