import React from 'react';

import { Testable } from '../../../modules/test-ids';
import { Variant } from '../styled';

import { Success, Warning, Danger, DialogIcon } from './styled';

export type Props = Testable & {
  variant: Variant;
  children?: React.ReactNode;
};

const icons: any = {
  success: <Success />,
  warning: <Warning />,
  danger: <Danger />,
};

export const Component = ({ variant, children }: Props) => {
  return <DialogIcon>{children ? children : icons[variant]}</DialogIcon>;
};

Component.displayName = 'ModalState.Icon';
