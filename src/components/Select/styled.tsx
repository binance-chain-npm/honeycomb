import styled from 'styled-components';
import { em } from 'polished';

import { Card } from '../Card';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.accent};
`;

export const StyledCard = styled(Card)`
  padding: ${({ theme }) => em(theme.honeycomb.size.small)};
`;

export const OptionsTitle = styled.div`
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.small)};
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionsContainer = styled(Card)`
  margin: 0 ${({ theme }) => em(theme.honeycomb.size.small)};
  padding: 0;
  scroll-behavior: smooth;
  max-height: min(${em(392)}, 40vh);
  overflow: hidden;
  overflow-y: auto;
`;
