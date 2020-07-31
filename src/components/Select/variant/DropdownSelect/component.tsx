import React, { useRef } from 'react';

import { useBuildTestId } from '../../../../modules/test-ids';
import { useWindowWidth, widths } from '../../../internal/useWindowWidth';
import { Select } from '../..';
import { Tooltip } from '../../../Tooltip';
import { ModalSelect } from '../ModalSelect';

import { DropdownSelect, StyledInputContainer, Styles } from './styled';

export type Props = Omit<React.ComponentProps<typeof Select>, 'variant'>;

export const Component = ({ 'data-testid': testId, ...otherProps }: Props) => {
  const buildTestId = useBuildTestId(testId);

  const width = useWindowWidth();
  const inputRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <DropdownSelect
        ref={inputRef}
        onClick={() => otherProps.toggleOpen?.()}
        data-testid={buildTestId('input')}
      >
        <StyledInputContainer>{otherProps.selected}</StyledInputContainer>
      </DropdownSelect>

      {width < widths.sm ? (
        <ModalSelect
          open={otherProps.open}
          onClose={() => otherProps.toggleOpen?.()}
          title={otherProps.title}
          data-testid={buildTestId('modal')}
        >
          {otherProps.children}
        </ModalSelect>
      ) : (
        <>
          <Styles />
          <Tooltip
            trigger="manual"
            theme="dropdown"
            interactive={true}
            arrow={false}
            content={otherProps.children}
            onClickContent={() => otherProps.toggleOpen?.()}
            visible={otherProps.open}
            reference={inputRef}
            data-testid={buildTestId('dropdown')}
          />
        </>
      )}
    </>
  );
};

Component.displayName = 'DropdownSelect';
