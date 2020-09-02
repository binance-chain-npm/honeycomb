import React, { useContext } from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { ListItemBaseProps } from '../../ListItem';
import { TestIdContext } from '../context';

import { Container, Variant } from './styled';

export type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'as'> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<ListItemBaseProps, 'showBorder'> &
  Testable & {
    variant?: Variant;
  };

export const Component = ({ variant = 'normal', children, ...otherProps }: Props) => {
  const parentTestId = useContext(TestIdContext);
  const buildTestId = useBuildTestId(otherProps['data-testid'] ? parentTestId : undefined);

  return (
    <Container
      {...otherProps}
      showBorder={false}
      variant={variant}
      data-testid={buildTestId(otherProps['data-testid'])}
    >
      {children}
    </Container>
  );
};

Component.displayName = 'Dropdown.Item';
