import React from 'react';

import { Testable } from '../../../modules/test-ids';

import { SvgContainer } from './styled';

export type Props = Testable & {
  icon: React.ReactNode;
};

export const Component = ({ icon }: Props) => {
  return <SvgContainer>{icon}</SvgContainer>;
};

Component.displayName = 'Toast.Icon';
