import React, { useContext } from 'react';

import { useBuildTestId } from '../../../modules/test-ids';
import { Dropdown } from '../../Dropdown';
import { Icon } from '../../Icon';
import { Space } from '../../Space';
import { TestIdContext } from '../context';

import { Target } from './styled';

export type Props = React.ComponentPropsWithoutRef<typeof Dropdown>;

export const Component = ({ target, children, ...otherProps }: Props) => {
  const parentTestId = useContext(TestIdContext);
  const buildTestId = useBuildTestId(otherProps['data-testid'] ? parentTestId : undefined);

  return (
    <Dropdown
      {...otherProps}
      target={
        <Target>
          {target}
          <Space size="micro" />
          <Icon.TriangleDown />
        </Target>
      }
      data-testid={buildTestId(otherProps['data-testid'])}
    >
      {children}
    </Dropdown>
  );
};

Component.displayName = 'Header.Dropdown';
