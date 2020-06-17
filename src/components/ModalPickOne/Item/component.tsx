import React, { useCallback, useContext } from 'react';

import { Testable } from '../../../modules/test-ids';
import { Icon } from '../../Icon';
import { Space } from '../../Space';
import { ModalPickOneContext } from '../context';

import { Container, Content } from './styled';

export type Props = Testable & {
  searchAs: string | string[];
  children?: React.ReactNode;
  isSelected?: boolean;
  onClick?: React.AllHTMLAttributes<HTMLButtonElement>['onClick'];
};

export const Component = ({ 'data-testid': testId, children, isSelected, onClick }: Props) => {
  const { onClose } = useContext(ModalPickOneContext);
  const click = useCallback<NonNullable<Props['onClick']>>(
    (evt) => {
      try {
        onClick?.(evt);
      } catch (e) {
        throw e;
      } finally {
        onClose?.();
      }
    },
    [onClick, onClose],
  );

  return (
    <Container data-testid={testId} onClick={click}>
      <Content>{children}</Content>
      <Space size="fill" />
      {isSelected && <Icon.Tick />}
    </Container>
  );
};

Component.displayName = 'ModalPickOne.Item';
