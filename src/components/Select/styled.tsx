import styled from 'styled-components';
import { em } from 'polished';

import { Card } from '../Card';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.accent};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.increased)};
`;

export const Search = styled.div`
  padding: ${({ theme }) => em(theme.honeycomb.radius.increased)};
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionsContainer = styled(Card)`
  margin: 0 ${({ theme }) => em(theme.honeycomb.radius.increased)};
  padding-top: 0;
  padding-bottom: 0;
`;
