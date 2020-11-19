import styled from 'styled-components';
import { em } from 'polished';

import { Card } from '../Card';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.accent};
`;

export const Search = styled.div`
  padding: ${({ theme }) => em(theme.honeycomb.radius.increased)};
`;

export const OptionsTitle = styled.div`
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.large)};
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionsContainer = styled(Card)`
  margin: 0 ${({ theme }) => em(theme.honeycomb.radius.increased)};
  padding: 0;
  scroll-behavior: smooth;
  max-height: 40vh;
  overflow: hidden;
  overflow-y: auto;
`;
