import React from 'react';

import { useBuildTestId } from '../../../../modules/test-ids';
import { Dropdown } from '../../../Dropdown';
import { Select } from '../../../Select';

import { Styled } from './styled';

export type Props = React.ComponentProps<typeof Select>;

export const Component = ({ children, open, onClose, target, 'data-testid': testId }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  return (
    <Dropdown bare target={target} open={open} onClose={onClose} data-testid={buildTestId()}>
      <Styled>{children}</Styled>
    </Dropdown>
  );
};

Component.displayName = 'DropdownSelect';
