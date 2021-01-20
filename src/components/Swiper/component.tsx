import React, { useMemo } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';

import { Testable, useBuildTestId } from '../../modules/test-ids';
import '../../../node_modules/swiper/swiper.min.css';
import '../../../node_modules/swiper/components/navigation/navigation.min.css';

import { Context } from './context';
import { MARGIN_WIDTH, Styled } from './styled';

SwiperCore.use([Navigation]);

export type Props = Omit<
  React.ComponentProps<typeof Swiper>,
  'navigation' | 'slidesPerView' | 'spaceBetween'
> &
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
        navigation
        data-testid={buildTestId()}
      >
        {children}
      </Styled>
    </Context.Provider>
  );
};

Component.displayName = 'Swiper';
