import React, { useContext, useMemo } from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { Icon } from '../../Icon';
import { DefaultTarget } from '../../internal/DefaultTarget';
import { ListItem } from '../../ListItem';
import { Context } from '../context';
import { useCurrentVariant } from '../useCurrentVariant';

import { StyledListItem } from './styled';

export type Props = React.ComponentPropsWithoutRef<typeof ListItem> & Testable;

export const Component = ({ children, onClick, 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const { variant = 'responsive', isShowing } = useContext(Context);
  const currentVariant = useCurrentVariant({ variant });

  const right = useMemo(() => {
    if (currentVariant === 'dropdown') {
      return isShowing ? <Icon.CaretUp /> : <Icon.CaretDown />;
    }

    return <Icon.CaretRight />;
  }, [isShowing, currentVariant]);

  return (
    <DefaultTarget onClick={onClick} data-testid={buildTestId()}>
      <StyledListItem right={right} showBorder={false} interactive={false} {...otherProps}>
        {children}
      </StyledListItem>
    </DefaultTarget>
  );
};

Component.displayName = 'Select.DefaultTarget';
