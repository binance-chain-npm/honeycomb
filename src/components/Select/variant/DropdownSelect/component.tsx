import React, { useMemo } from 'react';

import { useBuildTestId } from '../../../../modules/test-ids';
import { Select } from '../../../Select';
import { Tooltip } from '../../../Tooltip';
import { Context } from '../../context';

import { StyledContent } from './styled';

export type Props = Omit<React.ComponentProps<typeof Select>, 'variant'>;

export const Component = ({ target, onClose, 'data-testid': testId, ...otherProps }: Props) => {
  const buildTestId = useBuildTestId(testId);

  const context = useMemo(() => ({ onClose, testId }), [onClose, testId]);

  return (
    <Context.Provider value={context}>
      <Tooltip
        interactive={true}
        arrow={false}
        content={<StyledContent>{otherProps.children}</StyledContent>}
        visible={otherProps.open}
        onClickOutside={onClose}
        data-testid={buildTestId()}
        padding="none"
        radius="normal"
      >
        {target}
      </Tooltip>
    </Context.Provider>
  );
};

Component.displayName = 'DropdownSelect';
