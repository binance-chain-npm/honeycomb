import styled, { createGlobalStyle } from 'styled-components';
import { em } from 'polished';
import { ToastContainer } from 'react-toastify';

import toastify from '../../../../node_modules/react-toastify/dist/ReactToastify.min.css';
import { Button } from '../../../components/Button';
import { SIZES } from '../../../components/internal/useWindowSize';

const TOAST_HEIGHT = 56;

export const mdScreen = `min-width: ${em(SIZES.md)}`;

export const Styles = createGlobalStyle`
  ${toastify};
`;

export const StyledToastContainer = styled(ToastContainer)`
  &.Toastify__toast-container {
    display: flex;
    flex-direction: column;
    margin-bottom: -${({ theme }) => em(theme.honeycomb.size.small)};
    padding: ${({ theme }) => em(theme.honeycomb.size.small)};
    width: 100%;

    @media (${mdScreen}) {
      width: auto;
    }
  }
  &.Toastify__toast-container--top-left {
    top: 0;
    left: 0;
    align-items: start;
  }
  &.Toastify__toast-container--top-center {
    top: 0;
  }
  &.Toastify__toast-container--top-right {
    top: 0;
    right: 0;
    align-items: end;
  }
  &.Toastify__toast-container--bottom-left {
    bottom: 0;
    left: 0;
    align-items: start;
  }
  &.Toastify__toast-container--bottom-center {
    bottom: 0;
  }
  &.Toastify__toast-container--bottom-right {
    bottom: 0;
    right: 0;
    align-items: end;
  }
  .Toastify__toast {
    box-shadow: ${({ theme }) => theme.honeycomb.shadow.box.normal};
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.small)};
    padding: 0;
    background-color: ${({ theme }) => theme.honeycomb.color.bg.normal};
    width: 100%;
    min-height: ${em(TOAST_HEIGHT)};

    @media (${mdScreen}) {
      width: min-content;
    }
  }
  .Toastify__toast-body {
    display: flex;
    margin: 0;
    padding: 0;
  }
`;

export const StyledButton = styled(Button)`
  margin: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.small)};
  margin-left: 0;
`;
