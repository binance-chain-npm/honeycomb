import React from 'react';

import { Testable } from '../../../../modules/test-ids';
import { Icon } from '../../../Icon';

import { Open, Close } from './styled';

export type Props = React.ComponentPropsWithoutRef<typeof Icon.Binance> &
  Testable & {
    open: boolean;
  };

export const Component = ({ open, ...otherProps }: Props) => {
  return open ? <Close {...otherProps} /> : <Open {...otherProps} />;
};

Component.displayName = 'Dropdown.DefaultTarget.Icon';
