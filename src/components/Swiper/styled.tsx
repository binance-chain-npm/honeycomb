import styled, { createGlobalStyle, css } from 'styled-components';
import { em, transparentize } from 'polished';
import { Swiper } from 'swiper/react';

import swiper from '../../../node_modules/swiper/swiper.min.css';
import swiperNavigation from '../../../node_modules/swiper/components/navigation/navigation.min.css';
import { GoldDark } from '../../modules/themes/themes/GoldDark';

import prev from './prev.svg';
import next from './next.svg';

const SLIDE_WIDTH = 270;
const SLIDE_HEIGHT = 152;
export const MARGIN_WIDTH = 40;

export const Styles = createGlobalStyle`
  ${swiper};
  ${swiperNavigation};
`;

const buttons = css`
  width: ${({ theme }) => em(theme.honeycomb.size.large)};
  height: 100%;
  top: 0;
  margin: 0;
  cursor: pointer;
  background-color: ${transparentize(0.7, GoldDark.honeycomb.color.bg.tooltip.normal)};
  background-repeat: no-repeat;
  background-position: center;
`;

export const Styled = styled(Swiper)`
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};

  .swiper-slide {
    width: ${em(SLIDE_WIDTH)};
    height: ${em(SLIDE_HEIGHT)};
    border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
    overflow: hidden;
  }

  .swiper-button-prev {
    ${buttons};
    left: 0;
    background-image: url(${prev});

    ::after {
      display: none;
    }
  }

  .swiper-button-next {
    ${buttons};
    right: 0;
    background-image: url(${next});

    ::after {
      display: none;
    }
  }

  .swiper-button-disabled {
    display: none;
  }
`;
