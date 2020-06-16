import React from 'react';

import { Testable } from '../../../modules/test-ids';

export type Props = Testable & {
  searchAs: string;
  children?: React.ReactNode;
};

export const Component = ({ 'data-testid': testId, children }: Props) => {
  return <div data-testid={testId}>{children}</div>;
};

Component.displayName = 'ModalPickOne.Item';
