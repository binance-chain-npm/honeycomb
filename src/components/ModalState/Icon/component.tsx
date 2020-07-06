import React from 'react';

import { Testable } from '../../../modules/test-ids';
import { Variant } from '../styled';

import { DialogSuccess, DialogWarning, DialogDanger, DialogIcon } from './styled';

export type Props = Testable & {
  variant: Variant;
  icon: React.ReactNode;
};

const icons: any = {
  success: <DialogSuccess />,
  warning: <DialogWarning />,
  danger: <DialogDanger />,
};

export const Component = ({ variant, icon }: Props) => {
  return <DialogIcon>{icon ? icon : icons[variant]}</DialogIcon>;
};

Component.displayName = 'ModalState.Icon';
