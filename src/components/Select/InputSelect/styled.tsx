import styled, { createGlobalStyle as css } from 'styled-components';
import { em } from 'polished';

import { InputContainer, baseInputStyle } from '../../internal/Input';
import { boxSizing } from '../../../modules/box-sizing';

export const InputSelect = styled.div`
  ${boxSizing};

  width: 100%;
`;

export const StyledInputContainer = styled(InputContainer)`
  ${baseInputStyle};

  cursor: pointer;
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.increased)};
  text-indent: 0;
`;

export const Styles = css`
  .tippy-box[data-theme='dropdown'] {
    min-width: ${({ theme }) => em(300, theme.honeycomb.size.reduced)};

    .tippy-content {
      padding: 0;
    }
  }
`;
