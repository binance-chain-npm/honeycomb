import styled from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';

export const Container = styled.div`
  ${boxSizing};

  counter-reset: listCounter;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${em(100)}, 1fr));
`;

export const Item = styled.div`
  counter-increment: listCounter;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  margin: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  font-weight: 600;

  ::before {
    content: '#' counter(listCounter, decimal-leading-zero);
    min-width: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
    margin-right: ${({ theme }) => em(theme.honeycomb.size.reduced)};
    color: ${({ theme }) => theme.honeycomb.color.text.masked};
    font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  }
`;
