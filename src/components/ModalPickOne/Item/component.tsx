import React, { useCallback, useContext } from 'react';

import { useBuildTestId } from '../../../modules/test-ids';
import { ListItem } from '../../ListItem';
import { ModalPickOneContext } from '../context';

export type Props = React.ComponentPropsWithoutRef<typeof ListItem> & {
  searchAs: string | string[];
};

export const Component = ({ 'data-testid': testId, children, onClick, ...otherProps }: Props) => {
  const { onClose, testId: parentTestId } = useContext(ModalPickOneContext);
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
    <ListItem {...otherProps} onClick={click} data-testid={buildTestId()}>
      {children}
    </ListItem>
  );
};

Component.displayName = 'ModalPickOne.Item';
