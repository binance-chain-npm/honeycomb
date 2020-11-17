import React, { useContext } from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Modal } from '../../Modal';
import { TestIdContext } from '../context';

import { Scroll, Content, Padding } from './styled';

export type Props = Pick<React.ComponentPropsWithoutRef<typeof Modal>, 'children'> &
  Testable & {
    padding?: Padding;
    className?: string;
  };

export const Component = ({
  className,
  padding = 'normal',
  children,
  'data-testid': testId,
}: Props) => {
  const parentTestId = useContext(TestIdContext);
  const { buildTestId } = useBuildTestId({
    id: testId ?? (parentTestId ? `${parentTestId}.content` : undefined),
  });

  return (
    <Scroll>
      <Content className={className} padding={padding} data-testid={buildTestId()}>
        {children}
      </Content>
    </Scroll>
  );
};

Component.displayName = 'Modal.Content';
