import React, { useContext } from 'react';

import { useBuildTestId } from '../../../modules/test-ids';
import { Dropdown } from '../../Dropdown';
import { TestIdContext } from '../context';

import { StyledDefaultTarget } from './styled';

export type Props = React.ComponentPropsWithoutRef<typeof Dropdown>;

export const Component = ({ target, children, ...otherProps }: Props) => {
  const parentTestId = useContext(TestIdContext);
  const buildTestId = useBuildTestId(otherProps['data-testid'] ? parentTestId : undefined);

  return (
    <Dropdown
      {...otherProps}
      target={<StyledDefaultTarget>{target}</StyledDefaultTarget>}
      data-testid={buildTestId(otherProps['data-testid'])}
    >
      {children}
    </Dropdown>
  );
};

Component.displayName = 'Header.Dropdown';
