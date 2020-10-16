import styled from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../../modules/box-sizing';

export const Styled = styled.div<{ size?: number }>`
  ${boxSizing};

  background: ${({ theme }) => theme.honeycomb.color.border};
  height: 1px;
  width: ${({ size }) => (size ? em(size) : '100%')};
`;
