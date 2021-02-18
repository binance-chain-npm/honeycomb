import React, { useContext } from 'react';
import { SwiperSlide } from 'swiper/react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Context } from '../context';

export type Props = React.ComponentProps<typeof SwiperSlide> & Testable;

export const Component = ({ 'data-testid': testId, ...otherProps }: Props) => {
  const { testId: parentTestId } = useContext(Context);
  const { buildTestId } = useBuildTestId({
    id: testId ? parentTestId : undefined,
  });

  return <SwiperSlide {...otherProps} data-testid={buildTestId(testId)} />;
};

// The `swiper` code uses `displayName` to render slides correctly, so we cannot change it.
Component.displayName = 'SwiperSlide';
