import React, { useContext, useMemo } from 'react';

import { useBuildTestId } from '../../../modules/test-ids';
import { Icon } from '../../Icon';
import { ListItem } from '../../ListItem';
import { Context } from '../context';
import { useCurrentVariant } from '../useCurrentVariant';

import { StyledListItem } from './styled';

export type Props = Pick<
  React.ComponentPropsWithoutRef<typeof ListItem>,
  'children' | 'left' | 'onClick'
>;

export const Component = ({ children, onClick, ...otherProps }: Props) => {
  const { variant = 'responsive', isShowing, testId: parentTestId } = useContext(Context);
  const { buildTestId: buildTestIdParent } = useBuildTestId({ id: parentTestId });
  const { buildTestId } = useBuildTestId({
    id: buildTestIdParent('default-target'),
  });
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
  );
};

Component.displayName = 'Select.DefaultTarget';
