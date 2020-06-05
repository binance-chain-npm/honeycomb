import styled, { createGlobalStyle as css } from 'styled-components';
import { em } from 'polished';

export const Styles = css`
  .tippy-box[data-theme='dropdown'] {
    min-width: ${({ theme }) => em(200, theme.honeycomb.size.reduced)};

    .tippy-content {
      padding: 0;
    }
  }
`;

export const TargetContainer = styled.div`
  cursor: pointer;
`;
