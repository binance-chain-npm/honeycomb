import styled from 'styled-components';
import { em } from 'polished';

export const Code = styled.code`
  font-family: monospace;
  padding: ${({ theme }) => em(theme.honeycomb.size.micro)}
    ${({ theme }) => em(theme.honeycomb.size.tiny)};
  margin: 0 ${({ theme }) => em(theme.honeycomb.size.micro)};
  border: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced)};
  background-color: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
`;
