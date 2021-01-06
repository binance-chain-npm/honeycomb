import styled from 'styled-components';
import { em } from 'polished';

import { Table } from '../../Table';

export const Styled = styled(Table)`
  tr td:first-child {
    width: 20%;
  }

  tr td:nth-child(2) {
    width: 20%;
  }

  tr td:nth-child(3) {
    width: 15%;
  }

  code {
    font-family: monospace;
    padding: ${({ theme }) => em(theme.honeycomb.size.micro)}
      ${({ theme }) => em(theme.honeycomb.size.tiny)};
    margin: 0 ${({ theme }) => em(theme.honeycomb.size.micro)};
    border: 1px solid ${({ theme }) => theme.honeycomb.color.border};
    border-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced)};
    background-color: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
    color: ${({ theme }) => theme.honeycomb.color.text.masked};
  }
`;

export const Asterisk = styled.span`
  ::before {
    content: ' *';
    color: ${({ theme }) => theme.honeycomb.color.danger.normal};
  }
`;
