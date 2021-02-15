import React from 'react';

import { useBuildTestId } from '../../../../modules/test-ids';
import { Select } from '../../../Select';
import { Tooltip } from '../../../Tooltip';

import { Styled } from './styled';

export type Props = React.ComponentProps<typeof Select>;

export const Component = ({
  target,
  variant,
  onClose,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  return (
    <Tooltip
      interactive={true}
      arrow={false}
      content={<Styled>{otherProps.children}</Styled>}
      visible={otherProps.open}
      onClickOutside={onClose}
      data-testid={buildTestId()}
      bare
    >
      {target}
    </Tooltip>
  );
};

Component.displayName = 'DropdownSelect';
