import React from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Modal } from '../../Modal';

import { Scroll, Content, Padding } from './styled';

export type Props = Pick<React.ComponentPropsWithoutRef<typeof Modal>, 'children'> &
  Testable & {
    padding?: Padding;
  };

export const Component = ({ padding = 'normal', children }: Props) => {
  const buildTestId = useBuildTestId();

  return (
    <Scroll>
      <Content data-testid={buildTestId('content')} padding={padding}>
        {children}
      </Content>
    </Scroll>
  );
};

Component.displayName = 'Modal.Content';
