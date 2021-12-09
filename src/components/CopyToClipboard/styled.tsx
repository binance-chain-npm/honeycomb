import { em } from 'polished';
import styled from 'styled-components';

import { Button } from '../Button';
import { fontSize, Size } from '../internal/Size';

export const Container = styled(Button)`
  :not(:disabled) {
    cursor: pointer;
  }

  :disabled {
    opacity: 1;
  }
`;

export const IconContainer = styled.div<{ size: Size }>`
  position: relative;
  display: flex;
  flex-shrink: 0;
  width: ${({ theme, size }) => em(fontSize({ theme, size }))};
  height: ${({ theme, size }) => em(fontSize({ theme, size }))};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;
