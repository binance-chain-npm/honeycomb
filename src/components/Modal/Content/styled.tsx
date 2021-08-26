import styled from 'styled-components';
import { em } from 'polished';

export const Scroll = styled.div`
  flex: 1;
  scroll-behavior: smooth;
  overflow: hidden;
  overflow-y: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 100%;
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  padding: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;
