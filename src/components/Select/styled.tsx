import styled from 'styled-components';
import { em } from 'polished';

import { Card } from '../Card';
import { TextInput } from '../TextInput';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.accent};
`;

export const StyledCard = styled(Card)`
  padding: ${({ theme }) => em(theme.honeycomb.size.small)};
  box-shadow: none;
`;

export const StyledTextInput = styled(TextInput)`
  ${TextInput.Left} {
    margin-right: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.reduced)};
  }
`;

export const OptionTitle = styled.div`
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.small)};
`;

export const OptionContainer = styled.div`
  background: ${({ theme }) => theme.honeycomb.color.bg.normal};
  border-top-left-radius: ${({ theme }) => em(theme.honeycomb.radius.increased)};
  border-top-right-radius: ${({ theme }) => em(theme.honeycomb.radius.increased)};
  margin: 0 ${({ theme }) => em(theme.honeycomb.size.small)};
  overflow: hidden;
`;
