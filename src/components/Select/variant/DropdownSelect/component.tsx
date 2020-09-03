import React, { useMemo, useRef } from 'react';

import { useBuildTestId } from '../../../../modules/test-ids';
import { useWindowSize, sizes } from '../../../internal/useWindowSize';
import { Select } from '../../../Select';
import { Tooltip } from '../../../Tooltip';
import { SelectContext } from '../../context';
import { ModalSelect } from '../ModalSelect';

import { StyledContent } from './styled';

export type Props = Omit<React.ComponentProps<typeof Select>, 'variant'>;

export const Component = ({ target, onClose, 'data-testid': testId, ...otherProps }: Props) => {
  const context = useMemo(() => ({ onClose, testId }), [onClose, testId]);
  const buildTestId = useBuildTestId(testId);
  const targetRef = useRef<HTMLDivElement>(null);

  const { width, height } = useWindowSize();

  return (
    <>
      <div ref={targetRef}>{target}</div>
      {width < sizes.sm || height < sizes.sm ? (
        <ModalSelect
          open={otherProps.open}
          onClose={() => onClose?.()}
          title={otherProps.title}
          data-testid={buildTestId('modal')}
        >
          {otherProps.children}
        </ModalSelect>
      ) : (
        <SelectContext.Provider value={context}>
          <Tooltip
            trigger="manual"
            interactive={true}
            arrow={false}
            content={<StyledContent>{otherProps.children}</StyledContent>}
            visible={otherProps.open}
            reference={targetRef}
            data-testid={buildTestId('dropdown')}
          />
        </SelectContext.Provider>
      )}
    </>
  );
};

Component.displayName = 'DropdownSelect';
