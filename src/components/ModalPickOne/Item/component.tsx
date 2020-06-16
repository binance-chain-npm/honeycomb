import React from 'react';

import { Testable } from '../../../modules/test-ids';

export type Props = Testable & {
  searchAs: string | string[];
  children?: React.ReactNode;
};

export const Component = ({ 'data-testid': testId, children }: Props) => {
  return (
    <div data-testid={testId} style={{ marginBottom: '20px', borderBottom: '1px solid grey' }}>
      {children}
    </div>
  );
};

Component.displayName = 'ModalPickOne.Item';
