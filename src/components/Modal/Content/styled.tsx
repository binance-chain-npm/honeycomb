import styled, { css } from 'styled-components';
import { em } from 'polished';

export const padding = ['normal', 'none'] as const;
export type Padding = typeof padding[number];

export const Scroll = styled.div`
  flex: 1;
  scroll-behavior: smooth;
  overflow: hidden;
  overflow-y: auto;
`;

const normal = css`
  padding: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;

const none = css`
  padding: 0;
`;

export const Content = styled.div<{ padding: Padding }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 100%;
  color: ${({ theme }) => theme.honeycomb.color.text.normal};

  ${({ padding }) => padding === 'normal' && normal};
  ${({ padding }) => padding === 'none' && none};
`;
