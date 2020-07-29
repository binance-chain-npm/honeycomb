import styled, { createGlobalStyle as css } from 'styled-components';
import { em } from 'polished';

import { InputContainer, baseInputStyle } from '../internal/Input';
import { boxSizing } from '../../modules/box-sizing';

export const InputPickOne = styled.div`
  ${boxSizing};

  width: 100%;
`;

export const StyledInputContainer = styled(InputContainer)`
  ${baseInputStyle};

  cursor: pointer;
`;

export const Styles = css`
  .tippy-box[data-theme='dropdown'] {
    min-width: ${({ theme }) => em(300, theme.honeycomb.size.reduced)};

    .tippy-content {
      padding: 0;
    }
  }
`;
