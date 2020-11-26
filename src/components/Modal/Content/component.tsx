import React, { useContext } from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Modal } from '../../Modal';
import { TestIdContext } from '../context';
import { Padding } from '../styled';

import { Scroll, Content } from './styled';

export type Props = Pick<React.ComponentPropsWithoutRef<typeof Modal>, 'children'> &
  Testable & {
    padding?: Padding;
    className?: string;
  };

export const Component = ({ padding = 'normal', 'data-testid': testId, ...otherProps }: Props) => {
  const parentTestId = useContext(TestIdContext);
  const { buildTestId } = useBuildTestId({
    id: testId ?? (parentTestId ? `${parentTestId}.content` : undefined),
  });

  return (
    <Scroll>
      <Content {...otherProps} padding={padding} data-testid={buildTestId()} />
    </Scroll>
  );
};

Component.displayName = 'Modal.Content';
