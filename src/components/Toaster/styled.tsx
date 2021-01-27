import styled, { createGlobalStyle } from 'styled-components';
import { em } from 'polished';

import toastify from '../../../node_modules/react-toastify/dist/ReactToastify.min.css';
import { Button } from '../Button';

export const Styles = createGlobalStyle`
  ${toastify};

  .Toastify__toast-container {
    max-width: ${em(278)};
  }
  .Toastify__toast {
    padding: 0;
    min-height: ${em(56)};
    box-shadow: ${({ theme }) => theme.honeycomb.shadow.box.normal};
  }
  .Toastify__toast--error {
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
  }
  .Toastify__toast-body {
    width: 100%;
    padding: 0;
  }
  .Toastify__progress-bar {
  }
`;

export const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.small)};
  margin-right: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.small)};
`;
