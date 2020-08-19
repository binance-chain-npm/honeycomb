import styled from 'styled-components';

import { Button } from '../Button';

export const Container = styled(Button)`
  :not(:disabled) {
    cursor: pointer;
  }

  :disabled {
    opacity: 1;
  }
`;

export const IconContainer = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;
