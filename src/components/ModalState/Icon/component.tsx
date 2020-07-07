import React from 'react';

import { Testable } from '../../../modules/test-ids';
import { Variant } from '../styled';

import { Success, Warning, Danger, Svg } from './styled';

export type Props = Testable & {
  variant: Variant;
  children?: React.ReactNode;
};

type IconType = { [key in Variant]: React.ReactNode };

const icons: IconType = {
  success: <Success />,
  warning: <Warning />,
  danger: <Danger />,
};

export const Component = ({ variant, children }: Props) => {
  return <Svg>{children ? children : icons[variant]}</Svg>;
};

Component.displayName = 'ModalState.Icon';
