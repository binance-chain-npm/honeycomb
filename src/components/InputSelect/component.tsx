import React, { useCallback, useState, useRef } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { Select } from '../internal/Select';
import { useWindowWidth, widths } from '../internal/useWindowWidth';
import { ModalSelect } from '../ModalSelect';
import { Tooltip } from '../Tooltip';

import { InputSelect, StyledInputContainer, Styles } from './styled';

export type Props = Pick<React.HTMLProps<HTMLElement>, 'children' | 'onClick'> &
  Testable & {
    title?: React.ReactNode;
    selected?: React.ReactNode;
  };

export const Component = ({ children, onClick, title, selected, 'data-testid': testId }: Props) => {
  const buildTestId = useBuildTestId(testId);
  const [open, setOpen] = useState(false);

  const width = useWindowWidth();
  const inputRef = useRef<HTMLDivElement>(null);

  const click = useCallback<NonNullable<Props['onClick']>>(
    (evt) => {
      setOpen((value) => !value);
      onClick?.(evt);
    },
    [onClick],
  );

  const clickContent = useCallback(() => {
    if (!open) return;
    setOpen((value) => !value);
  }, [open]);

  return (
    <>
      <InputSelect onClick={click} ref={inputRef} data-testid={buildTestId('input')}>
        <StyledInputContainer>{selected}</StyledInputContainer>
      </InputSelect>

      {width < widths.sm ? (
        <ModalSelect
          open={open}
          onClose={() => setOpen(false)}
          title={title}
          data-testid={buildTestId('modal')}
        >
          {children}
        </ModalSelect>
      ) : (
        <>
          <Styles />
          <Tooltip
            trigger="manual"
            theme="dropdown"
            interactive={true}
            arrow={false}
            content={<Select data-testid={buildTestId()}>{children}</Select>}
            onClickContent={clickContent}
            visible={open}
            reference={inputRef}
            data-testid={buildTestId('tooltip')}
          />
        </>
      )}
    </>
  );
};

Component.displayName = 'InputSelect';
