import styled from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';

export type State = 'success' | 'danger';

export const Container = styled.div`
  ${boxSizing};

  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Description = styled.span`
  display: block;
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  margin-top: ${({ theme }) => em(4, theme.honeycomb.size.small)};
`;
