import React, { useContext } from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Modal } from '../../Modal';
import { TestIdContext } from '../context';

import { Scroll, Content, Padding } from './styled';

export type Props = Pick<React.ComponentPropsWithoutRef<typeof Modal>, 'children'> &
  Testable & {
    padding?: Padding;
  };

export const Component = ({ 'data-testid': testId, padding = 'normal', children }: Props) => {
  const parentTestId = useContext(TestIdContext);
  const buildTestId = useBuildTestId(testId ? parentTestId : undefined);

  return (
    <Scroll>
      <Content data-testid={buildTestId()} padding={padding}>
        {children}
      </Content>
    </Scroll>
  );
};

Component.displayName = 'Modal.Content';
