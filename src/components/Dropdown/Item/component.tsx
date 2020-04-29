import React, { useContext } from 'react';

import { TestIdContext } from '../context';
import { useBuildTestId, Testable } from '../../../modules/test-ids';

import { Container } from './styled';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Testable & {
    as?: React.ComponentProps<typeof Container>['as'];
  };

export const Component = (props: Props) => {
  const parentTestId = useContext(TestIdContext);
  const buildTestId = useBuildTestId(props['data-testid'] ? parentTestId : undefined);

  return (
    <Container as="button" {...props} data-testid={buildTestId(props['data-testid'])}>
      {props.children}
    </Container>
  );
};

Component.displayName = 'Dropdown.Item';
