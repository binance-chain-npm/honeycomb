import React from 'react';

import { Testable } from '../../../../modules/test-ids';

export type Props = Testable & {
  icon: React.ReactNode;
};

export const Component = ({ icon }: Props) => {
  return icon;
};

Component.displayName = 'Dropdown.DefaultTarget.Icon';
