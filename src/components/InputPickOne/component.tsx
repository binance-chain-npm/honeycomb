import React, { useCallback, useState, useRef } from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { PickOne } from '../internal/PickOne';
import { useWindowWidth, widths } from '../internal/useWindowWidth';
import { ModalPickOne } from '../ModalPickOne';
import { Tooltip } from '../Tooltip';

import { InputPickOne, StyledInputContainer, Styles } from './styled';

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
      <InputPickOne onClick={click} ref={inputRef} data-testid={buildTestId('input')}>
        <StyledInputContainer>{selected}</StyledInputContainer>
      </InputPickOne>

      {width < widths.sm ? (
        <ModalPickOne
          open={open}
          onClose={() => setOpen(false)}
          title={title}
          data-testid={buildTestId('modal')}
        >
          {children}
        </ModalPickOne>
      ) : (
        <>
          <Styles />
          <Tooltip
            trigger="manual"
            theme="dropdown"
            interactive={true}
            arrow={false}
            content={<PickOne data-testid={buildTestId()}>{children}</PickOne>}
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

Component.displayName = 'InputPickOne';