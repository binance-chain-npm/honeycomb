import React, { useMemo, useRef } from 'react';

import { useBuildTestId } from '../../../../modules/test-ids';
import { Select } from '../../../Select';
import { Tooltip } from '../../../Tooltip';
import { SelectContext } from '../../context';

import { StyledContent } from './styled';

export type Props = Omit<React.ComponentProps<typeof Select>, 'variant'>;

export const Component = ({ target, onClose, 'data-testid': testId, ...otherProps }: Props) => {
  const buildTestId = useBuildTestId(testId);

  const targetRef = useRef<HTMLDivElement>(null);

  const context = useMemo(() => ({ onClose, testId }), [onClose, testId]);

  return (
    <>
      <div ref={targetRef}>{target}</div>
      <SelectContext.Provider value={context}>
        <Tooltip
          interactive={true}
          arrow={false}
          content={<StyledContent>{otherProps.children}</StyledContent>}
          visible={otherProps.open}
          reference={targetRef}
          onClickOutside={onClose}
          data-testid={buildTestId()}
        />
      </SelectContext.Provider>
    </>
  );
};

Component.displayName = 'DropdownSelect';
