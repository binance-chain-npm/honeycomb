import styled, { css } from 'styled-components';
import { em } from 'polished';

import { bigScreen } from '../styled';

export const border = ['normal', 'none'] as const;
export type Border = typeof border[number];

export interface Props {
  hasHeader: boolean;
}

const floating = css`
  position: absolute;
  top: 0;
  right: 0;
  border-bottom: none;
  z-index: ${({ theme }) => theme.honeycomb.zIndexes.modals + 2};
`;

export const Header = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-shrink: 0;
  align-items: center;
  padding: ${({ theme }) => em(theme.honeycomb.size.normal)};

  border-bottom: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  ${({ hasHeader }) => !hasHeader && floating};
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  margin-right: -${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  flex: 1;
  text-align: center;
  font-weight: 600;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};

  @media (${bigScreen}) {
    font-size: ${({ theme }) => em(theme.honeycomb.size.normal)};
    margin-right: -${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.normal)};
  }
`;

export const LoadingState = styled.div`
  margin-right: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  @media (${bigScreen}) {
    margin-right: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.normal)};
  }
`;
