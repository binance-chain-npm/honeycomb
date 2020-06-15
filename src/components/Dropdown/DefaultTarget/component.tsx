import React, { useContext } from 'react';

import { ShowingContext } from '../context';
import { Icon } from '../../Icon';
import { Styleless } from '../../Styleless';

import { Container } from './styled';

export const Component = ({
  htmlTag = 'button',
  ...otherProps
}: Partial<React.ComponentPropsWithoutRef<typeof Styleless>> & { children: React.ReactNode }) => {
  const isShowing = useContext(ShowingContext);
  return (
    <Container {...otherProps} as={htmlTag as any} isShowing={isShowing}>
      {otherProps.children}
      &nbsp;
      <Icon.TriangleDown />
    </Container>
  );
};

Component.displayName = 'Dropdown.DefaultTarget';
