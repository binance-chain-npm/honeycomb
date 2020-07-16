import styled from 'styled-components';

import { boxSizing } from '../../../modules/box-sizing';

export const Divider = styled.div`
  ${boxSizing};

  background: ${({ theme }) => theme.honeycomb.color.border};
  height: 1px;
  width: 100%;
`;
