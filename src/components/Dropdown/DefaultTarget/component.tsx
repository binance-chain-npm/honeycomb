import React, { useContext } from 'react';

import { Context } from '../context';
import { Space } from '../../Space';
import { Styleless } from '../../Styleless';

import { Icon } from './Icon';
import { StyledDefaultTarget, Variant } from './styled';

export type Props = React.ComponentPropsWithoutRef<typeof Styleless> & {
  children: React.ReactNode;
  variant?: Variant;
};

export const Component = ({
  htmlTag = 'button',
  variant = 'normal',
  ...otherProps
}: Partial<Props>) => {
  const { isShowing } = useContext(Context);

  return (
    <StyledDefaultTarget
      {...otherProps}
      as={htmlTag as any}
      variant={variant}
      isShowing={isShowing}
    >
      {otherProps.children}
      <Space size="micro" base="reduced" />
      <Icon open={isShowing} />
    </StyledDefaultTarget>
  );
};

Component.displayName = 'Dropdown.DefaultTarget';
