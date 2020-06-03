import styled, { createGlobalStyle as css } from 'styled-components';

import { hcStyle } from '../../modules/themes';

export const Styles = css`
  .tippy-box[data-theme='dropdown'] {
    min-width: ${hcStyle.modularScale(21)({ forFontSize: 'reduced' })};

    .tippy-content {
      padding: 0;
    }
  }
`;

export const TargetContainer = styled.div`
  cursor: pointer;
`;
