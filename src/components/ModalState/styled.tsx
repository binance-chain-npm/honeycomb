import styled from 'styled-components';
import { em } from 'polished';

export const variants = ['success', 'warning', 'danger'] as const;
export type Variant = typeof variants[number];

export const ModalStateTitle = styled.div`
  font-size: ${({ theme }) => em(theme.honeycomb.size.normal)};
  text-align: center;
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  margin-top: ${({ theme }) => em(theme.honeycomb.size.normal)};
`;

export const ModalStateContent = styled.div`
  color: ${({ theme }) => theme.honeycomb.color.text.grey};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  text-align: center;
  margin-top: ${({ theme }) => em(theme.honeycomb.size.normal / 2)};
`;

export const ModalStateChildren = styled.div`
  display: block;
  margin-top: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;
