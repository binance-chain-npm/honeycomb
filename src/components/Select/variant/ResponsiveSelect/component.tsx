import React from 'react';

import { useBuildTestId } from '../../../../modules/test-ids';
import { useWindowSize, SIZES } from '../../../internal/useWindowSize';
import { DropdownSelect } from '../DropdownSelect';
import { ModalSelect } from '../ModalSelect';
import { Select } from '../../../Select';

export type Props = Omit<React.ComponentProps<typeof Select>, 'variant'>;

export const Component = ({ onClose, 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const { width } = useWindowSize();

  return (
    <>
      {width < SIZES.md ? (
        <ModalSelect
          target={otherProps.target}
          open={otherProps.open}
          onClose={() => onClose?.()}
          title={otherProps.title}
          data-testid={buildTestId('modal')}
        >
          {otherProps.children}
        </ModalSelect>
      ) : (
        <DropdownSelect {...otherProps} onClose={onClose} data-testid={buildTestId('dropdown')}>
          {otherProps.children}
        </DropdownSelect>
      )}
    </>
  );
};

Component.displayName = 'ResponsiveSelect';
