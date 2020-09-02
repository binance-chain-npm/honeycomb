import styled, { createGlobalStyle as css } from 'styled-components';
import { em } from 'polished';

import tippy from '../../../node_modules/tippy.js/dist/tippy.css';
import tippyAnimations from '../../../node_modules/tippy.js/animations/shift-away.css';
import { boxSizing } from '../../modules/box-sizing';

export const Styles = css`
  ${tippy};
  ${tippyAnimations};

  .tippy-box {
    &[data-theme='bc-honeycomb-bare'] {
      ${boxSizing};
      font-size: 1rem;
      background: transparent;
      border-radius: 0;
      box-shadow: none;
      overflow: visible;

      .tippy-content {
        padding: 0;
      }
    }
  }
`;

export const ContentContainer = styled.div`
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.tooltip.normal)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.increased)};
  box-shadow: ${({ theme }) => theme.honeycomb.shadow.normal};
  overflow: hidden;
`;

export const Content = styled.div`
  padding: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.reduced)}
    ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
`;
