import React, { useCallback, useContext } from 'react';

import { useBuildTestId } from '../../../../modules/test-ids';
import { ListItem } from '../../../ListItem';
import { PickOneContext } from '../context';

import { StyledListItem } from './styled';

export type Props = React.ComponentPropsWithoutRef<typeof ListItem> & {
  searchAs: string | string[];
};

export const Component = ({
  'data-testid': testId,
  children,
  onClick,
  htmlTag,
  ...otherProps
}: Props) => {
  const { onClose, testId: parentTestId } = useContext(PickOneContext);
  const buildTestIdParent = useBuildTestId(parentTestId);
  const buildTestId = useBuildTestId(buildTestIdParent(testId ? `item.${testId}` : undefined));

  const click = useCallback<NonNullable<Props['onClick']>>(
    (evt) => {
      try {
        onClick?.(evt);
      } catch (e) {
        throw e;
      } finally {
        onClose?.();
      }
    },
    [onClick, onClose],
  );

  return (
    <StyledListItem {...otherProps} onClick={click} data-testid={buildTestId()}>
      {children}
    </StyledListItem>
  );
};

Component.displayName = 'PickOne.Item';
