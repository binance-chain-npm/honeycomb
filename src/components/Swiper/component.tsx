import React, { useMemo } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Context } from './context';
import { MARGIN_WIDTH, Styled, Styles } from './styled';

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
    <>
      <Styles />
      <Context.Provider value={context}>
        <Styled
          {...otherProps}
          spaceBetween={MARGIN_WIDTH}
          navigation
          pagination={{
            clickable: true,
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
        </Styled>
      </Context.Provider>
    </>
  );
};

Component.displayName = 'Swiper';
