import React, { useContext } from 'react';
import { animated } from 'react-spring';

import { ShowingContext } from '../context';
import { Icon } from '../../Icon';
import { Styleless } from '../../Styleless';
import { useHoverSpring } from '../../../modules/hovering';

import { Container } from './Container';
import { ContentWrapper } from './ContentWrapper';

export const Component = (
  props: Partial<React.ComponentPropsWithoutRef<typeof Styleless>> & { children: React.ReactNode },
) => {
  const isShowing = useContext(ShowingContext);
  const { style, mouseEnter, mouseLeave } = useHoverSpring({
    onMouseLeave: props.onMouseLeave,
    onMouseEnter: props.onMouseEnter,
  });
  return (
    <Container
      as="button"
      {...props}
      isShowing={isShowing}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <ContentWrapper as={animated.div} style={style}>
        {props.children}
      </ContentWrapper>
      <Icon src={Icon.Src.CaretDown} />
    </Container>
  );
};

Component.displayName = 'DefaultTarget';
