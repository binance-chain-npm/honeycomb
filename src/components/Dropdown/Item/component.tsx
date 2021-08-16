import React, { useCallback, useContext } from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { ListItem } from '../../ListItem';
import { Context, ContentContext } from '../context';

import { StyledListItem, Variant } from './styled';

export type Props = Omit<React.ComponentPropsWithoutRef<typeof ListItem>, 'showBorder'> &
  Testable & {
    variant?: Variant;
  };

export const Component = ({
  variant = 'normal',
  children,
  onClick,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { testId: parentTestId } = useContext(ContentContext);
  const { buildTestId } = useBuildTestId({
    id: testId ? parentTestId : undefined,
  });
  const { onClose } = useContext(Context);

  const click = useCallback(
    (evt) => {
      try {
        onClick?.(evt);
      } catch (e) {
        throw e;
      } finally {
        onClose?.(evt);
      }
    },
    [onClick, onClose],
  );

  return (
    <StyledListItem
      {...otherProps}
      onClick={click}
      showBorder={false}
      variant={variant}
      data-testid={buildTestId(testId)}
    >
      {children}
    </StyledListItem>
  );
};

Component.displayName = 'Dropdown.Item';
