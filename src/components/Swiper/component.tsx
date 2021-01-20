import React, { useMemo } from 'react';
import { Swiper } from 'swiper/react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import '../../../node_modules/swiper/swiper.min.css';

import { Context } from './context';
import { MARGIN_WIDTH, Styled } from './styled';

export type Props = Omit<React.ComponentProps<typeof Swiper>, 'slidesPerView' | 'spaceBetween'> &
  Testable & {
    children: React.ReactNode;
  };

export const Component = ({ children, 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const context = useMemo(() => ({ testId }), [testId]);

  return (
    <Context.Provider value={context}>
      <Styled
        {...otherProps}
        spaceBetween={MARGIN_WIDTH}
        slidesPerView="auto"
        data-testid={buildTestId()}
      >
        {children}
      </Styled>
    </Context.Provider>
  );
};

Component.displayName = 'Swiper';
