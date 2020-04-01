import React, { useContext } from 'react';
import { animated } from 'react-spring';

import { TestIdContext } from '../context';
import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { useHoverSpring } from '../../../modules/hovering';

import { ContentWrapper, Container } from './styled';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Testable & {
    as?: React.ComponentProps<typeof Container>['as'];
  };

export const Component = (props: Props) => {
  const parentTestId = useContext(TestIdContext);
  const buildTestId = useBuildTestId(props['data-testid'] ? parentTestId : undefined);
  const { style, mouseEnter, mouseLeave } = useHoverSpring({
    onMouseLeave: props.onMouseLeave,
    onMouseEnter: props.onMouseEnter,
  });

  return (
    <Container
      as="button"
      {...props}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      data-testid={buildTestId(props['data-testid'])}
    >
      <ContentWrapper as={animated.div} style={style}>
        {props.children}
      </ContentWrapper>
    </Container>
  );
};

Component.displayName = 'Dropdown.Item';
