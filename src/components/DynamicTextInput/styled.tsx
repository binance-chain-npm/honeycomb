import styled from 'styled-components';
import { em } from 'polished';

import { styleless } from '../Styleless';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  min-height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};

  background: green;
`;

export const Input = styled.input<{ length: number }>`
  ${styleless};

  width: ${({ length }) => `${length}ch`};
  font-size: ${({ theme, length }) =>
    `max(min(${100 / length}vw, ${em(
      theme.honeycomb.size.huge,
      theme.honeycomb.size.reduced,
    )}), ${em(theme.honeycomb.size.reduced, theme.honeycomb.size.reduced)})`};
  background: pink;
`;
