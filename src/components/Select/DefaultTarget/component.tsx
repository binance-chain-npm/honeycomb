import React, { useContext, useMemo } from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { Icon } from '../../Icon';
import { DefaultTarget } from '../../internal/DefaultTarget';
import { ListItem } from '../../ListItem';
import { Context } from '../context';
import { useCurrentVariant } from '../useCurrentVariant';

import { StyledListItem } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> &
  Pick<React.ComponentPropsWithoutRef<typeof ListItem>, 'children' | 'left' | 'onClick'> &
  Testable;

export const Component = ({ children, onClick, 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const { variant = 'responsive', isShowing } = useContext(Context);
  const currentVariant = useCurrentVariant({ variant });

  const right = useMemo(() => {
    if (currentVariant === 'dropdown') {
      return isShowing ? (
        <Icon.CaretUp data-testid={buildTestId('caret-up')} />
      ) : (
        <Icon.CaretDown data-testid={buildTestId('caret-down')} />
      );
    }

    return <Icon.CaretRight data-testid={buildTestId('caret-right')} />;
  }, [isShowing, currentVariant, buildTestId]);

  return (
    <DefaultTarget>
      <StyledListItem
        right={right}
        showBorder={false}
        interactive={false}
        onClick={onClick}
        {...otherProps}
        data-testid={buildTestId()}
      >
        {children}
      </StyledListItem>
    </DefaultTarget>
  );
};

Component.displayName = 'Select.DefaultTarget';
