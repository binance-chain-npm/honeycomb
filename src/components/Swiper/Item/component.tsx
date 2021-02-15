import React from 'react';
import { SwiperSlide } from 'swiper/react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';

export type Props = React.ComponentProps<typeof SwiperSlide> & Testable;

export const Component = ({ 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  return <SwiperSlide {...otherProps} data-testid={buildTestId()} />;
};

// The `swiper` code uses `displayName` to render slides correctly, so we cannot change it.
Component.displayName = 'SwiperSlide';
