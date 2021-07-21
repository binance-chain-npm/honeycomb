import React, { useContext } from 'react';

import { Context } from '../context';
import { Shape, Size } from '../../internal/DefaultTarget';
import { Styleless } from '../../Styleless';

import { Icon } from './Icon';
import { StyledDefaultTarget } from './styled';

export type Props = Omit<React.ComponentPropsWithoutRef<typeof Styleless>, 'size'> & {
  children: React.ReactNode;
  arrow?: boolean;
  highlightWhenOpen?: boolean;
  shape?: Shape;
  size?: Size;
};

export const Component = ({
  htmlTag = 'button',
  arrow = true,
  highlightWhenOpen = false,
  shape = 'fill',
  size = 'huge',
  ...otherProps
}: Partial<Props>) => {
  const { isShowing } = useContext(Context);

  return (
    <StyledDefaultTarget
      {...otherProps}
      as={htmlTag as any}
      highlightWhenOpen={highlightWhenOpen}
      isShowing={isShowing}
      shape={shape}
      size={size}
    >
      {otherProps.children}
      {arrow && <Icon open={isShowing} />}
    </StyledDefaultTarget>
  );
};

Component.displayName = 'Dropdown.DefaultTarget';
