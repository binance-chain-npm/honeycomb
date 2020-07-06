import styled from 'styled-components';
import { em } from 'polished';

export const variants = ['success', 'warning', 'danger'] as const;
export type Variant = typeof variants[number];

export const ModalStateTitle = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  margin-top: ${({ theme }) => em(theme.honeycomb.size.normal)};
`;

export const ModalStateContent = styled.div`
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  text-align: center;
  margin-top: ${({ theme }) => em(theme.honeycomb.radius.normal)};
`;
