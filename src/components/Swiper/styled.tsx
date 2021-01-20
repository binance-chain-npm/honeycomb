import styled from 'styled-components';
import { em } from 'polished';
import { Swiper } from 'swiper/react';

const SLIDE_WIDTH = 270;
const SLIDE_HEIGHT = 152;
export const MARGIN_WIDTH = 40;

export const Styled = styled(Swiper)`
  .swiper-slide {
    width: ${em(SLIDE_WIDTH)};
    height: ${em(SLIDE_HEIGHT)};
    border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
    overflow: hidden;
  }
`;
