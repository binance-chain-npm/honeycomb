import React, { useContext } from 'react';

import { ShowingContext } from '../context';
import { Icon } from '../../Icon';
import { Styleless } from '../../Styleless';

import { Container } from './styled';

export const Component = (
  props: Partial<React.ComponentPropsWithoutRef<typeof Styleless>> & { children: React.ReactNode },
) => {
  const isShowing = useContext(ShowingContext);
  return (
    <Container as="button" {...props} isShowing={isShowing}>
      {props.children}
      &nbsp;
      <Icon src={Icon.Src.CaretDown} />
    </Container>
  );
};

Component.displayName = 'Dropdown.DefaultTarget';
