import React, { useContext } from 'react';

import { Context } from '../context';
import { Space } from '../../Space';
import { Styleless } from '../../Styleless';

import { Icon } from './Icon';
import { StyledDefaultTarget } from './styled';

export type Props = React.ComponentPropsWithoutRef<typeof Styleless> & {
  children: React.ReactNode;
  arrow?: boolean;
  highlightWhenOpen?: boolean;
};

export const Component = ({
  htmlTag = 'button',
  arrow = true,
  highlightWhenOpen = false,
  ...otherProps
}: Partial<Props>) => {
  const { isShowing } = useContext(Context);

  return (
    <StyledDefaultTarget
      {...otherProps}
      as={htmlTag as any}
      highlightWhenOpen={highlightWhenOpen}
      isShowing={isShowing}
    >
      {otherProps.children}
      {arrow && (
        <>
          <Space size="micro" base="reduced" />
          <Icon open={isShowing} />
        </>
      )}
    </StyledDefaultTarget>
  );
};

Component.displayName = 'Dropdown.DefaultTarget';
