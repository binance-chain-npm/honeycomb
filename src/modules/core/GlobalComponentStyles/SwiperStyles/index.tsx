import { createGlobalStyle } from 'styled-components';

import swiper from '../../../../../node_modules/swiper/swiper.min.css';
import swiperNavigation from '../../../../../node_modules/swiper/components/navigation/navigation.min.css';
import swiperPagination from '../../../../../node_modules/swiper/components/pagination/pagination.min.css';

export const Styles = createGlobalStyle`
  ${swiper};
  ${swiperNavigation};
  ${swiperPagination};
`;
