import React from 'react';

import { Testable } from '../../../modules/test-ids';
import { Variant } from '../styled';

import { Success, Warning, Danger, SvgContainer } from './styled';

export type Props = Testable & {
  variant?: Variant;
  children?: React.ReactNode;
};

type IconType = { [key in Variant]: React.ReactNode };

const icons: IconType = {
  success: <Success />,
  warning: <Warning />,
  danger: <Danger />,
};

export const Component = ({ variant, children }: Props) => {
  if (!variant && !children) {
    throw new Error('Icons must have either a "variant" or "children" prop, or both');
  }

  return <SvgContainer variant={variant}>{children ?? icons[variant!]}</SvgContainer>;
};

Component.displayName = 'ModalState.Icon';
