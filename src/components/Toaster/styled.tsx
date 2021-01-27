import styled, { createGlobalStyle } from 'styled-components';
import { em } from 'polished';
import { ToastContainer } from 'react-toastify';

import toastify from '../../../node_modules/react-toastify/dist/ReactToastify.min.css';
import { Button } from '../Button';

export const Styles = createGlobalStyle`
  ${toastify};
`;

export const Styled = styled(ToastContainer)`
  .Toastify__toast-container {
  }
  .Toastify__toast {
    padding: 0;
    min-height: ${em(56)};
  }
  .Toastify__toast--error {
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
  }
  .Toastify__toast-body {
    padding: 0;
  }
  .Toastify__progress-bar {
  }
`;

export const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.small)};
  margin-right: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.small)};
`;
