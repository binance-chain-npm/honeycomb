import styled, { createGlobalStyle, css } from 'styled-components';
import { em, transparentize } from 'polished';
import { Swiper } from 'swiper/react';

import swiper from '../../../node_modules/swiper/swiper.min.css';
import swiperNavigation from '../../../node_modules/swiper/components/navigation/navigation.min.css';
import swiperPagination from '../../../node_modules/swiper/components/pagination/pagination.min.css';
import { GoldDark } from '../../modules/themes/themes/GoldDark';
import { SIZES } from '../internal/useWindowSize';

import prev from './prev.svg';
import next from './next.svg';

const SLIDE_WIDTH = 270;
const SLIDE_HEIGHT = 152;
export const MARGIN_WIDTH = 40;

export const Styles = createGlobalStyle`
  ${swiper};
  ${swiperNavigation};
  ${swiperPagination};
`;

const buttons = css`
  width: ${({ theme }) => em(theme.honeycomb.size.large)};
  height: ${em(SLIDE_HEIGHT)};
  top: 0;
  margin: 0;
  cursor: pointer;
  background-color: ${transparentize(0.7, GoldDark.honeycomb.color.bg.tooltip.normal)};
  background-repeat: no-repeat;
  background-position: center;
`;

const navigation = css`
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

const pagination = css`
  .swiper-pagination {
    display: flex;
    justify-content: center;
    bottom: 0;

    .swiper-pagination-bullet {
      opacity: 1;
      background-color: ${({ theme }) => theme.honeycomb.color.text.disabled};
      margin: 0 ${em(2)};
    }

    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.honeycomb.color.primary.normal};
    }
  }
`;

export const Styled = styled(Swiper)`
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
  overflow: hidden;

  .swiper-slide {
    border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
    overflow: hidden;
  }

  ${pagination};
  padding-bottom: ${({ theme }) => em(theme.honeycomb.size.small)};

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }

  @media (min-width: ${em(SIZES.md)}) {
    ${navigation};
    padding-bottom: 0;

    .swiper-slide {
      width: ${em(SLIDE_WIDTH)} !important;
      height: ${em(SLIDE_HEIGHT)} !important;
    }

    .swiper-button-next,
    .swiper-button-prev {
      :not(.swiper-button-disabled) {
        display: flex;
      }
    }

    .swiper-pagination {
      display: none;
    }
  }
`;
