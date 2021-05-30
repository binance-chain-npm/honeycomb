import React, { useMemo } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Context } from './context';
import { MARGIN_WIDTH, Styled } from './styled';

SwiperCore.use([Navigation, Pagination]);

export type Props = Omit<
  React.ComponentProps<typeof Swiper>,
  'navigation' | 'pagination' | 'slidesPerView' | 'spaceBetween'
> &
  Testable;

export const Component = ({ children, 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const context = useMemo(() => ({ testId }), [testId]);

  return (
    <Context.Provider value={context}>
      <Styled
        {...otherProps}
        spaceBetween={MARGIN_WIDTH}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        breakpoints={{
          // SIZES.md
          768: {
            slidesPerView: 'auto',
          },
        }}
        data-testid={buildTestId()}
      >
        {children}
        <div className="swiper-button-prev" data-testid={buildTestId('btn-prev')}></div>
        <div className="swiper-button-next" data-testid={buildTestId('btn-next')}></div>
        <div className="swiper-pagination" data-testid={buildTestId('pagination')}></div>
      </Styled>
    </Context.Provider>
  );
};

Component.displayName = 'Swiper';
