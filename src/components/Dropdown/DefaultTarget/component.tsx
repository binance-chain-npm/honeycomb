import React, { useContext } from 'react';

import { ShowingContext } from '../context';
import { Icon } from '../../Icon';
import { DefaultTarget } from '../../internal/DefaultTarget';
import { Space } from '../../Space';
import { Styleless } from '../../Styleless';

export const Component = ({
  htmlTag = 'button',
  ...otherProps
}: Partial<React.ComponentPropsWithoutRef<typeof Styleless>> & { children: React.ReactNode }) => {
  const isShowing = useContext(ShowingContext);

  return (
    <DefaultTarget {...otherProps} as={htmlTag as any} isShowing={isShowing}>
      {otherProps.children}
      <Space size="micro" />
      {isShowing ? <Icon.TriangleUp /> : <Icon.TriangleDown />}
    </DefaultTarget>
  );
};

Component.displayName = 'Dropdown.DefaultTarget';
