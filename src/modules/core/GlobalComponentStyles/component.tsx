import React from 'react';

import { Styles as ModalStyles } from './ModalStyles';
import { Styles as SwiperStyles } from './SwiperStyles';
import { Styles as TooltipStyles } from './TooltipStyles';
import { Styles as ToastProviderStyles } from './ToastProviderStyles';

export const Component = () => (
  <>
    <ModalStyles />
    <SwiperStyles />
    <ToastProviderStyles />
    <TooltipStyles />
  </>
);

Component.displayName = 'GlobalComponentStyles';
