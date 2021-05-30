import { transitions } from 'polished';
import { createGlobalStyle, css } from 'styled-components';

const CLOSE_MODAL_TIMEOUT = 250;

const overlayOpen = css`
  opacity: 1;
`;

const overlayClose = css`
  opacity: 0;
`;

export const Styles = createGlobalStyle`
  .ReactModal__Overlay {
    ${overlayClose};
    ${transitions(['opacity'], `${CLOSE_MODAL_TIMEOUT}ms`)};
  }
  .ReactModal__Overlay--after-open {
    ${overlayOpen};
  }
  .ReactModal__Overlay--before-close {
    ${overlayClose};
  }
  .ReactModal__Content {
    ${transitions(['opacity', 'transform'], `${CLOSE_MODAL_TIMEOUT}ms`)};

    :focus {
      outline: none;
    }
  }
`;
