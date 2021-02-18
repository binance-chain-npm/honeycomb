import styled from 'styled-components';
import { em } from 'polished';

import { Table } from '../../../Table';

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
`;

export const Asterisk = styled.span`
  ::before {
    content: '*';
    color: ${({ theme }) => theme.honeycomb.color.danger.normal};
    padding-left: ${({ theme }) => em(theme.honeycomb.size.micro)};
  }
`;
