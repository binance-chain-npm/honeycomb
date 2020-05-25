import React, { useContext } from 'react';

import { TestIdContext } from '../context';
import { useBuildTestId, Testable } from '../../../modules/test-ids';

import { Container } from './styled';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Testable & {
    htmlTag?: React.ComponentProps<typeof Container>['as'];
  };

export const Component = ({ htmlTag = 'button', ...otherProps }: Props) => {
  const parentTestId = useContext(TestIdContext);
  const buildTestId = useBuildTestId(otherProps['data-testid'] ? parentTestId : undefined);

  return (
    <Container {...otherProps} as={htmlTag} data-testid={buildTestId(otherProps['data-testid'])}>
      {otherProps.children}
    </Container>
  );
};

Component.displayName = 'Dropdown.Item';
