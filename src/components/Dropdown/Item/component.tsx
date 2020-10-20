import React, { useCallback, useContext } from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { ListItem } from '../../ListItem';
import { Context, ContentContext } from '../context';

import { StyledListItem, Variant } from './styled';

export type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'as' | 'onClick'> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'> &
  Omit<React.ComponentPropsWithoutRef<typeof ListItem>, 'showBorder'> &
  Testable & {
    variant?: Variant;
  };

export const Component = ({ variant = 'normal', children, onClick, ...otherProps }: Props) => {
  const { testId: parentTestId } = useContext(ContentContext);
  const buildTestId = useBuildTestId(otherProps['data-testid'] ? parentTestId : undefined);
  const { onClose } = useContext(Context);

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
    <StyledListItem
      {...otherProps}
      onClick={click}
      showBorder={false}
      variant={variant}
      data-testid={buildTestId(otherProps['data-testid'])}
    >
      {children}
    </StyledListItem>
  );
};

Component.displayName = 'Dropdown.Item';
