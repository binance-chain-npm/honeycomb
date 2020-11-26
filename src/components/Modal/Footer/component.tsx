import React, { useContext } from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Modal } from '..';
import { TestIdContext } from '../context';
import { Padding } from '../styled';

import { Footer } from './styled';

export type Props = Pick<React.ComponentPropsWithoutRef<typeof Modal>, 'children' | 'className'> &
  Testable & {
    padding?: Padding;
  };

export const Component = ({ padding = 'normal', 'data-testid': testId, ...otherProps }: Props) => {
  const parentTestId = useContext(TestIdContext);
  const { buildTestId } = useBuildTestId({
    id: testId ?? (parentTestId ? `${parentTestId}.footer` : undefined),
  });

  return <Footer {...otherProps} padding={padding} data-testid={buildTestId()} />;
};

Component.displayName = 'Modal.Footer';
