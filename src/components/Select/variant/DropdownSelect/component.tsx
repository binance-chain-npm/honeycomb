import React, { useMemo } from 'react';

import { useBuildTestId } from '../../../../modules/test-ids';
import { useWindowWidth, widths } from '../../../internal/useWindowWidth';
import { Select } from '../../../Select';
import { Tooltip } from '../../../Tooltip';
import { SelectContext } from '../../context';
import { ModalSelect } from '../ModalSelect';

import { StyledContent } from './styled';

export type Props = Omit<React.ComponentProps<typeof Select>, 'variant'>;

export const Component = ({ 'data-testid': testId, onClose, ...otherProps }: Props) => {
  const context = useMemo(() => ({ onClose, testId }), [onClose, testId]);
  const buildTestId = useBuildTestId(testId);

  const width = useWindowWidth();

  return (
    <>
      {width < widths.sm ? (
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
            onClickContent={() => onClose?.()}
            visible={otherProps.open}
            data-testid={buildTestId('dropdown')}
          />
        </SelectContext.Provider>
      )}
    </>
  );
};

Component.displayName = 'DropdownSelect';
