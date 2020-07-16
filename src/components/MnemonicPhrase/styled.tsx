import styled from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';

export const Container = styled.ol`
  ${boxSizing};

  counter-reset: listCounter;
  display: flex;
  list-style: none;
  margin: -${({ theme }) => theme.honeycomb.size.reduced};
  padding: 0;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  counter-increment: listCounter;
  display: flex;
  min-width: 50px;
  background: ${({ theme }) => theme.honeycomb.color.bg.masked};
  color: ${({ theme }) => theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.masked)};
  border: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  border-radius: ${({ theme }) => em(theme.honeycomb.size.huge / 2)};
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-start;
  margin: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  padding-right: ${({ theme }) => em(theme.honeycomb.size.increased)};
  height: ${({ theme }) => em(theme.honeycomb.size.huge)};
  overflow: hidden;

  ::before {
    content: '#' counter(listCounter);
    font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
    min-width: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
    height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
    background: ${({ theme }) => theme.honeycomb.color.bg.normal};
    display: flex;
    padding: 0 ${({ theme }) => em(theme.honeycomb.size.reduced, theme.honeycomb.size.reduced)};
    margin-right: ${({ theme }) =>
      em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
    align-items: center;
    justify-content: center;
  }
`;
