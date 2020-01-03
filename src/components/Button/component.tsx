import React from 'react';
import { animated } from 'react-spring';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import { useHoverSpring } from '../../modules/hovering';
import { Styleless } from '../../components/Styleless';

import { Styled, Look } from './styled';
import { Wrapper } from './Wrapper';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Testable & {
    tag: React.ComponentProps<typeof Styleless>['tag'];
    look: Look;
  };

export const Component = (props: Props) => {
  const { children, onMouseEnter, onMouseLeave, 'data-testid': testId, ...otherProps } = props;
  const buildTestId = useBuildTestId(testId);
  const { style, mouseEnter, mouseLeave } = useHoverSpring({
    onMouseEnter,
    onMouseLeave,
  });

  return (
    <Styled
      {...otherProps}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      data-testid={buildTestId()}
    >
      <Wrapper as={animated.div} style={style} data-testid={buildTestId('wrapper')}>
        {children}
      </Wrapper>
    </Styled>
  );
};

Component.displayName = 'Button';
Component.defaultProps = {
  tag: 'button',
  look: Look.Default,
} as Props;
