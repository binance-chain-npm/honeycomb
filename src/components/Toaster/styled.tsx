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
    min-height: ${em(56)};
    box-shadow: ${({ theme }) => theme.honeycomb.shadow.box.normal};
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.small)};
    padding: 0;
  }
  .Toastify__toast-body {
    display: flex;
    padding: 0;
  }

  .Toastify__toast-container--top-left {
    top: ${({ theme }) => em(theme.honeycomb.size.small)};
    left: ${({ theme }) => em(theme.honeycomb.size.small)};
  }
  .Toastify__toast-container--top-center {
    top: ${({ theme }) => em(theme.honeycomb.size.small)};
  }
  .Toastify__toast-container--top-right {
    top: ${({ theme }) => em(theme.honeycomb.size.small)};
    right: ${({ theme }) => em(theme.honeycomb.size.small)};
  }
  .Toastify__toast-container--bottom-left {
    bottom: ${({ theme }) => em(theme.honeycomb.size.small)};
    left: ${({ theme }) => em(theme.honeycomb.size.small)};
  }
  .Toastify__toast-container--bottom-center {
    bottom: ${({ theme }) => em(theme.honeycomb.size.small)};
  }
  .Toastify__toast-container--bottom-right {
    bottom: ${({ theme }) => em(theme.honeycomb.size.small)};
    right: ${({ theme }) => em(theme.honeycomb.size.small)};
  }
`;

export const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.small)};
  margin-right: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.small)};
`;
