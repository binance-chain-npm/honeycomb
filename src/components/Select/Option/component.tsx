import React, { useCallback, useContext } from 'react';

import { useBuildTestId } from '../../../modules/test-ids';
import { ListItem } from '../../ListItem';
import { Context } from '../context';

import { StyledDropdownItem } from './styled';

export type Props = React.ComponentPropsWithoutRef<typeof ListItem> & {
  searchAs?: string | string[];
};

export const Component = ({ children, onClick, 'data-testid': testId, ...otherProps }: Props) => {
  const { onClose, testId: parentTestId } = useContext(Context);
  const { buildTestId } = useBuildTestId({
    id: testId ? parentTestId : undefined,
  });

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
    <StyledDropdownItem {...otherProps} onClick={click} data-testid={buildTestId(testId)}>
      {children}
    </StyledDropdownItem>
  );
};

Component.displayName = 'Select.Option';
